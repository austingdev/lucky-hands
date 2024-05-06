<?php 
namespace VanguardLTE\Games\MonopolyRouletteTycoon
{

    use VanguardLTE\Lib\BasicSlotSettings;
    use VanguardLTE\Lib\JackpotHandler;

    class SlotSettings extends BasicSlotSettings
    {
        public $winRate = 40;
        public $playerId = null;
        public $splitScreen = null;
        public $reelStrips = null;
        public $reelStrip1 = null;
        public $reelStrip2 = null;
        public $reelStrip3 = null;
        public $reelStrip4 = null;
        public $reelStrip5 = null;
        public $reelStrip6 = null;
        public $reelStripBonus1 = null;
        public $reelStripBonus2 = null;
        public $reelStripBonus3 = null;
        public $reelStripBonus4 = null;
        public $reelStripBonus5 = null;
        public $reelStripBonus6 = null;
        public $slotId = '';
        public $slotDBId = '';
        public $Line = null;
        public $scaleMode = null;
        public $numFloat = null;
        public $gameLine = null;
        public $Bet = null;
        public $isBonusStart = null;
        public $Balance = null;        
        public $SymbolString = null;
        public $SymbolGame = null;
        public $HighSymbol = null;
        public $GambleType = null;
        public $lastEvent = null;
        public $Jackpots = [];
        public $keyController = null;
        public $slotViewState = null;
        public $hideButtons = null;
        public $slotReelsConfig = null;
        public $slotFreeCount = null;
        public $slotFreeMpl = null;
        public $slotWildMpl = null;
        public $slotExitUrl = null;
        public $slotBonus = null;
        public $slotBonusType = null;
        public $slotScatterType = null;
        public $slotGamble = null;
        public $Paytable = [];
        public $slotSounds = [];
        public $jpgs = null;
        private $Bank = null;
        private $Percent = null;
        private $WinLine = null;
        private $WinGamble = null;
        private $Bonus = null;
        public $shop_id = null;
        public $currency = null;
        public $user = null;
        public $game = null;
        public $shop = null;
        public $jpgPercentZero = false;
        public $count_balance = null;
        public $wheelFeature = null;
        public $monopolyTable = null;
        
        public function __construct($sid, $playerId)
        {
            $this->slotId = $sid;
            $this->playerId = $playerId;
            $user = \VanguardLTE\User::lockForUpdate()->find($this->playerId);
            $this->user = $user;
            $this->shop_id = $user->shop_id;
            $gamebank = \VanguardLTE\GameBank::where(['shop_id' => $this->shop_id])->lockForUpdate()->get();
            $game = \VanguardLTE\Game::where([
                'name' => $this->slotId, 
                'shop_id' => $this->shop_id
            ])->first();
            $this->shop = \VanguardLTE\Shop::find($this->shop_id);
            $this->game = $game;
            $this->MaxWin = $this->shop->max_win;
            $this->increaseRTP = 1;
            $this->CurrentDenom = $this->game->denomination;
            $this->scaleMode = 0;
            $this->numFloat = 0;
            
            $this->Paytable = [
                'PICK' => 35,
                'SPLIT' => 18,
                'STREET' => 12,
                'CORNER' => 9,
                'SIX' => 6,
                'DOZEN' => 3,
                'COLUMN' => 3,
                'OUTSIDE_LOW' => 2,
                'OUTSIDE_HIGH' => 2,
                'OUTSIDE_ODD' => 2,
                'OUTSIDE_EVEN' => 2,
                'OUTSIDE_RED' => 2,
                'OUTSIDE_BLACK' => 2,
            ];

            $this->monopolyTable = [
                'BOARDWALK' => 6.3,
                'PARK PLACE' => 28,
                'SHORT LINE' => 19,
                'PENNSYLVANIA AVENUE' => 16.76,
                'NORTH CAROLINA AVENUE' => 12.75,
                'PACIFIC AVENUE' => 10.8,
                'MARVIN GARDENS' => 8.65,
                'WATER WORKS' => 7.3,
                'VENTNOR AVENUE' => 6.05,
                'ATLANTIC AVENUE' => 5.1,
                'B. & O. RAILROAD' => 4.45,
                'ILLINOIS AVENUE' => 2.6,
                'INDIANA AVENUE' => 3.4,
                'KENTUCKY AVENUE' => 2.8,
                'NEW YORK AVENUE' => 2.25,
                'TENNESSEE AVENUE' => 2.35,
                'ST. JAMES PLACE' => 2.35,
                'PENNSYLVANIA RAILROAD' => 1.75,
                'VIRGINIA AVENUE' => 2.7,
                'STATES AVENUE' => 2.9,
                'ELECTRIC COMPANY' => 2.6,
                'ST. CHARLES PLACE' => 1.7,
                'CONNECTICUT AVENUE' => 2,
                'VERMONT AVENUE' => 1.8,
                'ORIENTAL AVENUE' => 2,
                'READING RAILROAD' => 2.55,
                'BALTIC AVENUE' => 4.85,
                'MEDITERRANEAN AVENUE' => 8.8
            ];

            $this->keyController = [
                '13' => 'uiButtonSpin,uiButtonSkip', 
                '49' => 'uiButtonInfo', 
                '50' => 'uiButtonCollect', 
                '51' => 'uiButtonExit2', 
                '52' => 'uiButtonLinesMinus', 
                '53' => 'uiButtonLinesPlus', 
                '54' => 'uiButtonBetMinus', 
                '55' => 'uiButtonBetPlus', 
                '56' => 'uiButtonGamble', 
                '57' => 'uiButtonRed', 
                '48' => 'uiButtonBlack', 
                '189' => 'uiButtonAuto', 
                '187' => 'uiButtonSpin'
            ];
            $this->slotReelsConfig = [
                [
                    425, 
                    142, 
                    3
                ], 
                [
                    669, 
                    142, 
                    3
                ], 
                [
                    913, 
                    142, 
                    3
                ], 
                [
                    1157, 
                    142, 
                    3
                ], 
                [
                    1401, 
                    142, 
                    3
                ]
            ];
            $this->slotBonusType = 1;
            $this->slotScatterType = 0;
            $this->splitScreen = false;
            $this->slotBonus = true;
            $this->slotGamble = true;
            $this->slotFastStop = 1;
            $this->slotExitUrl = '/';
            $this->slotWildMpl = 2;
            $this->GambleType = 1;
            $this->slotFreeCount = 10;
            $this->slotFreeMpl = 1;
            $this->slotViewState = ($game->slotViewState == '' ? 'Normal' : $game->slotViewState);
            $this->hideButtons = [];
            $this->jpgs = \VanguardLTE\JPG::where('shop_id', $this->shop_id)->get();
          
            $this->Bet = explode(',', $game->bet);
            $this->Balance = $user->balance;
            $this->SymbolGame = [0,1,2,3,4,5,6,7,8,9,10,11,12];            
            $this->Bank = $game->get_gamebank();
            $this->Percent = $this->shop->percent;
            $this->WinGamble = $game->rezerv;
            $this->slotDBId = $game->id;
            
            $this->count_balance = $user->count_balance;
            // if( $user->address > 0 && $user->count_balance == 0 ) 
            // {
            //     $this->Percent = 0;
            //     $this->jpgPercentZero = true;
            // }
            // else if( $user->count_balance == 0 ) 
            // {
            //     $this->Percent = 100;
            // }
            if( !isset($this->user->session) || strlen($this->user->session) <= 0 ) 
            {
                $this->user->session = serialize([]);
            }
            $this->gameData = unserialize($this->user->session);
            if( count($this->gameData) > 0 ) 
            {
                foreach( $this->gameData as $key => $vl ) 
                {
                    if( $vl['timelife'] <= time() ) 
                    {
                        unset($this->gameData[$key]);
                    }
                }
            }
            if( !isset($this->game->advanced) || strlen($this->game->advanced) <= 0 ) 
            {
                $this->game->advanced = serialize([]);
            }
            $this->gameDataStatic = unserialize($this->game->advanced);
            if( count($this->gameDataStatic) > 0 ) 
            {
                foreach( $this->gameDataStatic as $key => $vl ) 
                {
                    if( $vl['timelife'] <= time() ) 
                    {
                        unset($this->gameDataStatic[$key]);
                    }
                }
            }
        }
        public function is_active()
        {
            if( $this->game && $this->shop && $this->user && (!$this->game->view || $this->shop->is_blocked || $this->user->is_blocked || $this->user->status == \VanguardLTE\Support\Enum\UserStatus::BANNED) ) 
            {
                \VanguardLTE\Session::where('user_id', $this->user->id)->delete();
                $this->user->update(['remember_token' => null]);
                return false;
            }
            if( !$this->game->view ) 
            {
                return false;
            }
            if( $this->shop->is_blocked ) 
            {
                return false;
            }
            if( $this->user->is_blocked ) 
            {
                return false;
            }
            if( $this->user->status == \VanguardLTE\Support\Enum\UserStatus::BANNED ) 
            {
                return false;
            }
            return true;
        }
        public function SetGameData($key, $value)
        {
            $timeLife = 86400;
            $this->gameData[$key] = [
                'timelife' => time() + $timeLife, 
                'payload' => $value
            ];
        }
        public function GetGameData($key)
        {
            if( isset($this->gameData[$key]) ) 
            {
                return $this->gameData[$key]['payload'];
            }
            else
            {
                return 0;
            }
        }
        public function FormatFloat($num)
        {
            $str0 = explode('.', $num);
            if( isset($str0[1]) ) 
            {
                if( strlen($str0[1]) > 4 ) 
                {
                    return round($num * 100) / 100;
                }
                else if( strlen($str0[1]) > 2 ) 
                {
                    return floor($num * 100) / 100;
                }
                else
                {
                    return $num;
                }
            }
            else
            {
                return $num;
            }
        }
        public function SaveGameData()
        {
            $this->user->session = serialize($this->gameData);            
            $this->user->save();
        }        
        
        public function HasGameDataStatic($key)
        {
            if( isset($this->gameDataStatic[$key]) ) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public function SaveGameDataStatic()
        {
            $this->game->advanced = serialize($this->gameDataStatic);
            $this->game->save();
            $this->game->refresh();
        }
        public function SetGameDataStatic($key, $value)
        {
            $timeLife = 86400;
            $this->gameDataStatic[$key] = [
                'timelife' => time() + $timeLife, 
                'payload' => $value
            ];
        }
        public function GetGameDataStatic($key)
        {
            if( isset($this->gameDataStatic[$key]) ) 
            {
                return $this->gameDataStatic[$key]['payload'];
            }
            else
            {
                return 0;
            }
        }
        public function HasGameData($key)
        {
            if( isset($this->gameData[$key]) ) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        
        public function GetHistory()
        {
            $history = \VanguardLTE\GameLog::whereRaw('game_id=? and user_id=? ORDER BY id DESC LIMIT 10', [
                $this->slotDBId, 
                $this->playerId
            ])->get();
            $this->lastEvent = 'NULL';
            foreach( $history as $log ) 
            {
                $tmpLog = json_decode($log->str);
                // if( $tmpLog->responseEvent != 'gambleResult' ) 
                {
                    $this->lastEvent = $log->str;
                    break;
                }
            }
            if( isset($tmpLog) ) 
            {
                return $tmpLog;
            }
            else
            {
                return 'NULL';
            }
        }
        public function UpdateJackpots($bet)
        {
            $this->AccumulateBonus($bet);
            JackpotHandler::updateJackpots($this, $bet);
        }
        public function GetBank($slotState = '')
        {
            if( $slotState == 'bonus' || $slotState == 'freespin' || $slotState == 'respin' ) 
            {
                $slotState = 'bonus';
            }
            else
            {
                $slotState = '';
            }
            $game = $this->game;
            $this->Bank = $game->get_gamebank($slotState);
            
            return $this->Bank / $this->CurrentDenom;
        }
        public function GetPercent()
        {
            return $this->Percent;
        }
        public function GetCountBalanceUser()
        {
            return $this->user->count_balance;
        }
        public function InternalErrorSilent($errcode)
        {
            $strLog = '';
            $strLog .= "\n";
            $strLog .= ('{"responseEvent":"error","responseType":"' . $errcode . '","serverResponse":"InternalError","request":' . json_encode($_REQUEST) . ',"requestRaw":' . file_get_contents('php://input') . '}');
            $strLog .= "\n";
            $strLog .= ' ############################################### ';
            $strLog .= "\n";
            $slg = '';
            if( file_exists(storage_path('logs/') . $this->slotId . 'Internal.log') ) 
            {
                $slg = file_get_contents(storage_path('logs/') . $this->slotId . 'Internal.log');
            }
            file_put_contents(storage_path('logs/') . $this->slotId . 'Internal.log', $slg . $strLog);
        }
        public function InternalError($errcode)
        {
            $strLog = '';
            $strLog .= "\n";
            $strLog .= ('{"responseEvent":"error","responseType":"' . $errcode . '","serverResponse":"InternalError","request":' . json_encode($_REQUEST) . ',"requestRaw":' . file_get_contents('php://input') . '}');
            $strLog .= "\n";
            $strLog .= ' ############################################### ';
            $strLog .= "\n";
            $slg = '';
            if( file_exists(storage_path('logs/') . $this->slotId . 'Internal.log') ) 
            {
                $slg = file_get_contents(storage_path('logs/') . $this->slotId . 'Internal.log');
            }
            file_put_contents(storage_path('logs/') . $this->slotId . 'Internal.log', $slg . $strLog);
            exit( '' );
        }
        public function SetBank($slotState = '', $sum, $slotEvent = '')
        {
            // if( $slotState == 'bonus' || $slotState == 'freespin' || $slotState == 'respin' ) 
            // {
            //     $slotState = 'bonus';
            // }
            // else
            // {
            //     $slotState = '';
            // }
            // $game = $this->game;
            // if( $this->GetBank($slotState) + $sum < 0 ) 
            // {                
            //     $lost = $this->GetBank($slotState) + $sum;
            //     if($slotState == 'bonus' && $this->GetBank('') > 0)
            //     {
            //         $normal_bank = $this->GetBank('');
            //         $exchange_amount = 0;
            //         if($normal_bank + $lost > 0)
            //             $exchange_amount = $lost;
            //         else
            //             $exchange_amount = -$normal_bank;

            //         $game->set_gamebank($exchange_amount, 'inc', 'bet');
            //         $game->set_gamebank(-$exchange_amount, 'inc', 'bonus');
            //     }  
            // }
            // $sum = $sum * $this->CurrentDenom;
            
            // $bankBonusSum = 0;
            // if( $sum > 0 && $slotEvent == 'bet' ) 
            // {
            //     $this->toGameBanks = 0;
            //     $this->toSlotJackBanks = 0;
            //     $this->toSysJackBanks = 0;
            //     $this->betProfit = 0;
            //     $prc = $this->GetPercent();
            //     $prc_b = 0;
            //     if( $prc <= $prc_b ) 
            //     {
            //         $prc_b = 0;
            //     }
            //     $gameBet = $sum / $this->GetPercent() * 100;
            //     $bankBonusSum = $gameBet / 100 * $prc_b;
                                  
            //     for( $i = 0; $i < count($this->jpgs); $i++ ) 
            //     {
            //         if( !$this->jpgPercentZero ) 
            //         {
            //             $this->toSlotJackBanks += ($gameBet / 100 * $this->jpgs[$i]->percent);
            //         }
            //     }
            //     $this->toGameBanks = $sum;
            //     $this->betProfit = $gameBet - $this->toGameBanks - $this->toSlotJackBanks - $this->toSysJackBanks;
            // }
            // if( $sum > 0 ) 
            // {
            //     $this->toGameBanks = $sum;
            // }
            // if( $bankBonusSum > 0 ) 
            // {
            //     $sum -= $bankBonusSum;
            //     $game->set_gamebank($bankBonusSum, 'inc', 'bonus');
            // }
            // if( $sum == 0 && $slotEvent == 'bet' && isset($this->betRemains) ) 
            // {
            //     $sum = $this->betRemains;
            // }
            // $game->set_gamebank($sum, 'inc', $slotState);
            // $game->save();
            // return $game;
        }
        public function SetBalance($sum, $slotEvent = '')
        {
            if( $this->GetBalance() + $sum < 0 ) 
            {
                $this->InternalError('Balance_   ' . $sum);
            }
            $sum = $sum * $this->CurrentDenom;
            if( $sum < 0 && $slotEvent == 'bet' ) 
            {
                $user = $this->user;
                if( $user->count_balance == 0 ) 
                {
                    $remains = [];
                    $this->betRemains = 0;
                    $sm = abs($sum);
                    if( $user->address < $sm && $user->address > 0 ) 
                    {
                        $remains[] = $sm - $user->address;
                    }
                    for( $i = 0; $i < count($remains); $i++ ) 
                    {
                        if( $this->betRemains < $remains[$i] ) 
                        {
                            $this->betRemains = $remains[$i];
                        }
                    }
                }
                if( $user->count_balance > 0 && $user->count_balance < abs($sum) ) 
                {
                    $remains0 = [];
                    $sm = abs($sum);
                    $tmpSum = $sm - $user->count_balance;
                    $this->betRemains0 = $tmpSum;
                    if( $user->address > 0 ) 
                    {
                        $this->betRemains0 = 0;
                        if( $user->address < $tmpSum && $user->address > 0 ) 
                        {
                            $remains0[] = $tmpSum - $user->address;
                        }
                        for( $i = 0; $i < count($remains0); $i++ ) 
                        {
                            if( $this->betRemains0 < $remains0[$i] ) 
                            {
                                $this->betRemains0 = $remains0[$i];
                            }
                        }
                    }
                }
                $sum0 = abs($sum);
                if( $user->count_balance == 0 ) 
                {
                    $sm = abs($sum);
                    if( $user->address < $sm && $user->address > 0 ) 
                    {
                        $user->address = 0;
                    }
                    else if( $user->address > 0 ) 
                    {
                        $user->address -= $sm;
                    }
                }
                else if( $user->count_balance > 0 && $user->count_balance < $sum0 ) 
                {
                    $sm = $sum0 - $user->count_balance;
                    if( $user->address < $sm && $user->address > 0 ) 
                    {
                        $user->address = 0;
                    }
                    else if( $user->address > 0 ) 
                    {
                        $user->address -= $sm;
                    }
                }
                $this->user->count_balance = $this->user->updateCountBalance($sum, $this->count_balance);
                $this->user->count_balance = $this->FormatFloat($this->user->count_balance);
            }
            $this->user->increment('balance', $sum);
            $this->user->balance = $this->FormatFloat($this->user->balance);
            $this->user->save();
            JackpotHandler::processBonus($this);
            return $this->user;
        }
        public function GetBalance()
        {
            $user = $this->user;
            $this->Balance = $user->balance / $this->CurrentDenom;
            return $this->Balance;
        }
        
        public function GetSpinSettings($garantType = 'bet', $allbet)
        {
            $this->AllBet = $allbet;
            return $this->SpinSettings($garantType, $this->AllBet);
        }
        public function GetRandomScatterPos($rp, $endCnt, $sb)
        {
            $rpResult = [];
            for( $i = 0; $i < count($rp); $i++ ) 
            {
                if( $rp[$i] == $sb ) 
                {
                    if( isset($rp[$i]) && isset($rp[$i + $endCnt - 1]) ) 
                    {
                        array_push($rpResult, $i);
                    }
                    if( isset($rp[$i - 1]) && isset($rp[$i + $endCnt - 1]) ) 
                    {
                        array_push($rpResult, $i - 1);
                    }
                    if(isset($rp[$i - 2]) && isset($rp[$i + $endCnt - 2]) ) 
                    {
                        array_push($rpResult, $i - 2);
                    }
                }
            }
            shuffle($rpResult);
            if( !isset($rpResult[0]) ) 
            {
                $rpResult[0] = rand(2, count($rp) - $endCnt);
            }
            return $rpResult[0];
        }

        public function GetRandomHanzoPos($rp, $endCnt, $sb)
        {
            $rpResult = [];
            for( $i = 0; $i < count($rp); $i++ ) 
            {
                if( $rp[$i] == $sb ) 
                {
                    array_push($rpResult, $i);
                }
            }
            shuffle($rpResult);
            if( !isset($rpResult[0]) ) 
            {
                $rpResult[0] = rand(0, count($rp) - $endCnt);
            }
            return $rpResult[0];
        }

        public function GetGambleSettings()
        {
            $spinWin = rand(1, $this->WinGamble);
            return $spinWin;
        }
        public function GetReelStrips($winType, $reelName, $type)        
        {
            $arrReels = [
                $reelName.'1', 
                $reelName.'2', 
                $reelName.'3',
                $reelName.'4',
                $reelName.'5',
            ];

            $endLen = 3;
            $prs = [];
            $reel = [
                'rp' => []
            ];
            if($winType != 'bonus')
            {
                foreach( $arrReels as $index => $reelStrip ) 
                {
                    if( is_array($this->reelStrips) && count($this->reelStrips[$reelStrip]) > 0 ) 
                    {
                        $prs[$index + 1] = mt_rand(1, count($this->reelStrips[$reelStrip]) - $endLen);
                    }
                }
            }
            else
            {
                $symb = '11';                
                $reelsId = [];
                foreach($arrReels as $index => $reelStrip ) 
                {
                    if( is_array($this->reelStrips[$reelStrip]) && count($this->reelStrips[$reelStrip]) > 0 ) 
                    {
                        $prs[$index + 1] = $this->GetRandomScatterPos($this->reelStrips[$reelStrip], $endLen, $symb);
                        $reelsId[] = $index + 1;
                    }
                }

                $scattersCnt = 5;                
                for( $i = 0; $i < count($reelsId); $i++ ) 
                {
                    if( $i < $scattersCnt ) 
                    {
                        $prs[$reelsId[$i]] = $this->GetRandomScatterPos($this->reelStrips[$reelName.$reelsId[$i]], $endLen, $symb);
                    }
                    else
                    {
                        $prs[$reelsId[$i]] = rand(1, count($this->reelStrips[$reelName.$reelsId[$i]]) - $endLen);
                    }
                }          
            }

            
            foreach( $prs as $index => $value )
            {
                $key = $this->reelStrips[$reelName.$index];
                $key[-1] = $key[count($key) - 1];
                $reel['reel' . $index][0] = $key[$value];
                $reel['reel' . $index][1] = $key[$value + 1];
                $reel['reel' . $index][2] = $key[$value + 2];                
                $reel['rp'][] = $value + 1;
            }

            return $reel;
        }
        
        public function GetNudgedReel($reelName, $reelIndex, $rp, $nudge)
        {
            $arr = $this->reelStrips[$reelName.($reelIndex+1)];
            if($nudge == -1 && $rp < 3)
                return [];
            if($nudge == 1 && $rp > count($arr) - 4)
                return [];
            $res = array_slice($arr, ($rp + $nudge) - 1, 5);
            
            return $res;
        }

        public function GetPaylines()
        {
            $linesId = [[1,1,1,1,1], [0,0,0,0,0], [2,2,2,2,2], [0,1,2,1,0], [2,1,0,1,2],
                        [1,0,0,0,1], [1,2,2,2,1], [0,0,1,2,2], [2,2,1,0,0], [1,0,1,0,1],
                        [1,2,1,2,1], [0,1,1,1,2], [2,1,1,1,0], [1,1,0,1,2], [1,1,2,1,0],
                        [0,1,0,1,0], [2,1,2,1,2], [0,0,2,0,0], [2,2,0,2,2], [1,0,2,0,1],
                        [1,2,0,2,1], [0,2,0,2,0], [2,0,2,0,2], [0,2,2,2,0], [2,0,0,0,2]];
            return $linesId;
        }

        public function GetReelSymbol($reels)
        {
            $reelSyms = [];
            foreach($reels as $index => $value)
            {
                if(strpos($index, 'reel') !== false)
                {
                    $reel = [];
                    foreach($value as $sym)
                        $reel[] = $sym;
                    $reelSyms[] = $reel;
                }
            }
            return $reelSyms;
        }

        public function GetCombination($cards)
        {
            $cardsAssoc = [
                '0-14', 
                '0-2', 
                '0-3', 
                '0-4', 
                '0-5', 
                '0-6', 
                '0-7', 
                '0-8', 
                '0-9', 
                '0-10', 
                '0-11', 
                '0-12', 
                '0-13', 
                '1-14', 
                '1-2', 
                '1-3', 
                '1-4', 
                '1-5', 
                '1-6', 
                '1-7', 
                '1-8', 
                '1-9', 
                '1-10', 
                '1-11', 
                '1-12', 
                '1-13', 
                '2-14', 
                '2-2', 
                '2-3', 
                '2-4', 
                '2-5', 
                '2-6', 
                '2-7', 
                '2-8', 
                '2-9', 
                '2-10', 
                '2-11', 
                '2-12', 
                '2-13', 
                '3-14', 
                '3-2', 
                '3-3', 
                '3-4', 
                '3-5', 
                '3-6', 
                '3-7', 
                '3-8', 
                '3-9', 
                '3-10', 
                '3-11', 
                '3-12', 
                '3-13'
            ];
            $cardsDefract0 = [];
            $cardsDefract1 = [];
            for( $i = 0; $i < count($cards); $i++ ) 
            {
                $card = $cards[$i];
                $cardsDefract0[$i] = (int)$card[0];
                $cardsDefract1[$i] = (int)$card[1];
            }
            $cardsS = $cardsDefract1;
            $suitsS = $cardsDefract0;
            sort($cardsS, SORT_NUMERIC);
            sort($suitsS, SORT_NUMERIC);
            $cardsAmount = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0
            ];
            for( $i = 2; $i <= 14; $i++ ) 
            {
                for( $j = 0; $j < count($cards); $j++ ) 
                {
                    if( $cardsS[$j] == $i ) 
                    {
                        $cardsAmount[$i]++;
                    }
                }
            }
            $combinations = [];
            $combinations[0] = [ //high card
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[1] = [ //one pair
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[2] = [ //two pair
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[3] = [ //three of a kind
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[4] = [ //straight
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[5] = [ //flush
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[6] = [ //full house
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[7] = [ //four of a kind
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[8] = [ //straight flush
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $combinations[9] = [ //loyal flush
                'amount' => 0, 
                'advanced' => [
                    0, 
                    0
                ]
            ];
            $pairCount = 0;
            $pairCards = [];
            for( $i = 2; $i <= 14; $i++ ) 
            {
                if( $cardsAmount[$i] == 1)
                {
                    $combinations[0]['amount'] = 1;
                    $combinations[0]['advanced'][0] = $i;
                }
                if( $cardsAmount[$i] == 2 ) 
                {
                    $combinations[1]['amount'] += 1;
                    $combinations[1]['advanced'][0] = $i;
                    $pairCount++;
                    $pairCards[] = $i;
                }
                if( $pairCount == 2 ) 
                {
                    $combinations[2]['amount'] += 1;
                    $combinations[2]['advanced'] = $pairCards;
                }
                if( $cardsAmount[$i] == 3 ) 
                {
                    $combinations[3]['amount'] += 1;
                    $combinations[3]['advanced'][0] = $i;
                }
                if( $cardsAmount[$i] == 4 ) 
                {
                    $combinations[7]['amount'] += 1;
                    $combinations[7]['advanced'][0] = $i;
                }
                $straightStack = 0;
                for( $s = $i; $s < ($i + 5); $s++ ) 
                {
                    if( $cardsAmount[$s] >= 1 ) 
                    {
                        $straightStack++;
                    }
                }

                if($i == 5 && $cardsAmount[14] >= 1 && $cardsAmount[2] >= 1 && $cardsAmount[3] >= 1 && $cardsAmount[4] >= 1 && $cardsAmount[5] >= 1 ) //straight A2345
                {
                    $straightStack = 5;
                    $combinations[4]['amount'] = 1;
                    $combinations[4]['advanced'][0] = 5;
                }

                if( $straightStack == 5 ) 
                {
                    $combinations[4]['amount'] = 1;
                    $combinations[4]['advanced'][0] = $i + 5;
                }
            }
            if( $suitsS[0] == $suitsS[1] && $suitsS[1] == $suitsS[2] && $suitsS[2] == $suitsS[3] && $suitsS[3] == $suitsS[4] ) 
            {
                $combinations[5]['amount'] = 1;
                $combinations[5]['advanced'][0] = $cardsS[0];
                $combinations[5]['advanced'][1] = $suitsS[0];
            }
            if( isset($suitsS[5]) ) 
            {
                if( $suitsS[1] == $suitsS[2] && $suitsS[2] == $suitsS[3] && $suitsS[3] == $suitsS[4] && $suitsS[4] == $suitsS[5] ) 
                {
                    $combinations[5]['amount'] = 1;
                    $combinations[5]['advanced'][0] = $cardsS[1];
                    $combinations[5]['advanced'][1] = $suitsS[1];
                }
                if( $suitsS[2] == $suitsS[3] && $suitsS[3] == $suitsS[4] && $suitsS[4] == $suitsS[5] && $suitsS[5] == $suitsS[6] ) 
                {
                    $combinations[5]['amount'] = 1;
                    $combinations[5]['advanced'][0] = $cardsS[2];
                    $combinations[5]['advanced'][1] = $suitsS[2];
                }
            }
            if( $combinations[3]['amount'] == 1 && $combinations[1]['amount'] == 1 ) 
            {
                $combinations[6]['amount'] = 1;
                $combinations[6]['advanced'][0] = $combinations[3]['advanced'][0];
                $combinations[6]['advanced'][1] = $combinations[1]['advanced'][0];
            }
            if( $combinations[4]['amount'] == 1 && $combinations[5]['amount'] == 1 ) 
            {
                $combinations[8]['amount'] = 1;
                $combinations[8]['advanced'] = $combinations[4]['advanced'];
            }
            if( $combinations[8]['amount'] == 1 && $combinations[8]['advanced'][0] == 14 ) 
            {
                $combinations[9]['amount'] = 1;
                $combinations[9]['advanced'] = $combinations[8]['advanced'];
            }
            $result = [
                0, 
                0, 
                0, 
                0
            ];
            for( $i = 9; $i >= 0; $i-- ) 
            {
                if( $combinations[$i]['amount'] > 0 ) 
                {
                    $result = [
                        0, 
                        $i, 
                        $combinations[$i]['advanced'][0], 
                        $combinations[$i]['advanced'][1]
                    ];
                    break;
                }
            }
            return $result;
        }
    }

}
