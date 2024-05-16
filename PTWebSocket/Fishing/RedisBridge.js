const redis = require('ioredis');
const { lock } = require('simple-redis-mutex');
const { Common } = require('./Common');
const mysql_tools = require('./mysql_tools');
const { toFloat, getRandomInt, in_array } = require('./utils');
var dbconn = require('./DBConn').dbconn;
var client;
var RedisLock = 'RedisLock';
class RedisBridge{
    constructor(){
        this.SHOP_KEY = 'shop_';
        this.PLAYER_BET_KEY = 'player_bet_';
        this.PLAYER_TOTAL_BET_KEY = 'player_total_bet_';
        this.PLAYER_WIN_KEY = 'player_win_';
        this.PLAYER_TOTAL_WIN_KEY = 'player_total_win_';
        this.PLAYER_BALANCE_KEY = 'player_balance_';
        this.PLAYER_LAST_BALANCE_KEY = 'player_last_balance_';
        this.percent = 80;
        this.normalPercent = 30;
        client = redis.createClient(
		{
			password: process.env.REDIS_PASSWORD
		});
        client.connect();
        client.on('error', error=>{
            console.error(error);
        });

        client.on('connect', async ()=>{
            console.log('Reddis service connected');            
        });       

        this.startTime = new Date();
        this.isRun = true;
    }

    /**
     * get total bet/win value of player
     * @param {*Player instance} player 
     */
    async getBetWin(player)
    {
        var key1 = this.PLAYER_TOTAL_WIN_KEY + player.userId;
        var key2 = this.PLAYER_TOTAL_BET_KEY + player.userId;

        var total_win = await client.get(key1);
        var total_bet = await client.get(key2);
        if(total_win == undefined || total_bet == undefined)
        {
            player.total_win = 0;        
            player.total_bet = 0;  
            client.set(key1, player.total_win);
            client.set(key2, player.total_bet);                
        }
        else
        {
            player.total_bet = toFloat(total_bet);
            player.total_win = toFloat(total_win);
        }
    }

    /**
     * update bank value when bet
     * @param {Player instance} player     
     */
    async updateBank(player, bet_amount)
    {
        bet_amount *= 0.01;

        //update player bet value
        var key = this.PLAYER_BET_KEY + player.userId;
        var betData = await client.get(key);      
        if(betData == null || betData == 'NaN')
        {
            client.set(key, 0);
            betData = 0;
        }  
        client.set(key, toFloat(betData) + bet_amount);
        // console.log("player bet amount: " + (toFloat(betData) + bet_amount));
        
        key = this.PLAYER_TOTAL_BET_KEY + player.userId;
        var total_bet = await client.get(key);      
        if(total_bet == null || total_bet == 'NaN')
        {
            client.set(key, player.total_bet);
            total_bet = player.total_bet;
        }  
        client.set(key, toFloat(total_bet) + bet_amount);
        player.total_bet += bet_amount;        
        // console.log("player bet amount: " + player.total_bet);
    }

    /**
     * Change bank value when win
     * @param {Player instance} player 
     * @param {normal bank value} bank 
     * @param {skill bank value} skillBank 
     */
    async updateBankDirect(player, normal, skill)
    {        
        //update player win value
        var key = this.PLAYER_WIN_KEY + player.userId;
        var win = await client.get(key);
        if(win == null || win == 'NaN')
        {
            client.set(key, 0);
            win = 0;
        }
        win = (toFloat(win) + toFloat(normal) + toFloat(skill)).toFixed(2);
        client.set(key, win);

        key = this.PLAYER_TOTAL_WIN_KEY + player.userId;
        var total_win = await client.get(key);
        if(total_win == null || total_win == 'NaN')
        {
            client.set(key, player.total_win);
            total_win = player.total_win;
        }
        total_win = (toFloat(total_win) + toFloat(normal) + toFloat(skill)).toFixed(2);
        client.set(key, total_win);
        player.total_win += toFloat(normal) + toFloat(skill);
    }

    /**
     * save player data from redis cahce to database
     * @param {Player instance} player 
     */
    async synchronizePlayerToDB(player)
    {
        //save player balance
        var key = this.PLAYER_BALANCE_KEY + player.userId;
        var balance = toFloat(await client.get(key));
        var result = await mysql_tools.sendQuery(dbconn, "SELECT balance FROM w_users WHERE id = ?", [player.userId]);
        if(result.length > 0)
        {
            var db_balance = toFloat(result[0]['balance']);
            key = this.PLAYER_LAST_BALANCE_KEY + player.userId;
            var last_balance = toFloat(await client.get(key));
            
            // console.log("synchronizing balance to db, last_balance_db: " + last_balance + " current_balance_db: " + db_balance + " cur balance: " + balance + " new balance: " + (balance + db_balance - last_balance));
            balance += (db_balance - last_balance); //if db's balance is changed by admin, consider that delta value and change the player's balance
            client.set(this.PLAYER_BALANCE_KEY + player.userId, balance);
            client.set(this.PLAYER_LAST_BALANCE_KEY + player.userId, balance);
            player.balance = balance * 100;
            mysql_tools.sendQuery(dbconn, "UPDATE w_users SET balance = ?, summon = ?, freeze = ? WHERE id = ?", [ balance, player.summon, player.freeze, player.userId ]);
        }        

        //player bet for saving time
        key = this.PLAYER_BET_KEY + player.userId;
        var value = await client.get(key);
        if(value == null)
        {
            client.set(key, 0);
            value = 0;
        }
        var bet = toFloat(value).toFixed(2);

        //player win for saving time
        key = this.PLAYER_WIN_KEY + player.userId;
        value = await client.get(key);
        if(value == null)
        {
            client.set(key, 0);
            value = 0;
        }
        var win = toFloat(value).toFixed(2);

        //save player bet/win statistics
        if(bet > 0 || win > 0)
        {
            key = this.PLAYER_BET_KEY + player.userId;
            client.set(key, 0);
            key = this.PLAYER_WIN_KEY + player.userId;
            client.set(key, 0);
            if(player.is_demo == 0)
            {

                var winInfo = JSON.stringify(player.winFish);
                player.winFish = [];
                mysql_tools.sendQuery(dbconn, "INSERT INTO w_stat_game (user_id, balance, bet, win, game, game_name, shop_id, category, info) VALUES (?,?,?,?,?,?,?,?,?)", [player.id, balance, bet, win, player.gameName + "PGD", player.gameName + "PGD", player.real_shop_id, 2, winInfo]);
            }

            //update bonus info
            var bonuses = await mysql_tools.sendQuery(dbconn, "SELECT * FROM w_bonuses WHERE user_id = ? and (subtype = 1 or type = 0)", [player.userId]);
            if(bonuses.length > 0)
            {
                for(var i = 0; i < bonuses.length; i++)
                {
                    var bonus = bonuses[i];
                    if(bonus.available_step < bonus.total_step)
                    {
                        var step_progress = parseFloat(bonus.step_progress) + toFloat(bet);
                        var available_step = bonus.available_step;
                        if(step_progress > bonus.step_size)
                        {
                            step_progress = 0;
                            available_step++;
                            if(available_step > bonus.total_step)
                                available_step = bonus.total_step;
                        }

                        await mysql_tools.sendQuery(dbconn, "UPDATE w_bonuses set available_step = ?, step_progress = ? where id = ?", [available_step, step_progress, bonus.id]);
                    }
                }
                
            }
        }        
    }

    async updateBalance(player)
    {
        var key = this.PLAYER_BALANCE_KEY + player.userId;
        var value = client.get(key);        
        if(value != undefined)
        {
            client.set(key, player.balance / 100);
        }
    }

    async setLastBalance(player)
    {
        var key = this.PLAYER_LAST_BALANCE_KEY + player.userId;
        client.set(key, player.balance / 100);
        key = this.PLAYER_BALANCE_KEY + player.userId;
        client.set(key, player.balance / 100);
    }

    async getAngle()
    {
        var key = "FISH_ANGLE";
        var value = await client.get(key);
        return value;
    }

    stop()
    {
        this.isRun = false;
    }

    isWinningWave(player)
    {
        if(!player.getBetWinCondition())
            return false;
        return true;
    }
}

module.exports = {RedisBridge};