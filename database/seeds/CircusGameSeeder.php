<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;

class CircusGameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // INSERT INTO `w_games` VALUES ('3', 'AladdinAdventurePGD', 'Aladdin Adventure', '0', '0', null, '2', 'slots', '0', '2', '80', '4', '', '', '0.01, 0.02, 0.05, 0.10, 0.20', '', '', '0', '1.00', '2', '3', '0', '0.0000', '0.0000', '2022-11-09 12:59:57', '2023-01-13 08:26:10');
        // INSERT INTO `w_games` VALUES ('26', 'FishHunterGhostPGD', 'Zombie Awaken', '0', '0', null, '2', 'slots', '0', '1', '80', '4', '', 'a:2:{s:12:\"SpinWinLimit\";a:2:{s:8:\"timelife\";i:1642003408;s:7:\"payload\";i:0;}s:15:\"RtpControlCount\";a:2:{s:8:\"timelife\";i:1642004590;s:7:\"payload\";i:0;}}', '0.01, 0.02, 0.05, 0.10, 0.20', '', '', '0', '1.00', '2', '26', '0', '0.0000', '0.0000', '2022-11-09 12:59:58', '2023-01-13 08:26:10');
        /*
         * Add Circus game
         *
         */


        $game = \VanguardLTE\Game::create([
            'id' => 5, 
            'name' => 'FishCircusPGD',
            'title' => 'Circus',
            'shop_id' => 11,
            'jpg_id' => 0,
            'device' => 2,
            'tag' => 1,
            'rtp' => 80,
            'rezerv' => 4,
            'bet' => '0.01, 0.02, 0.05, 0.10, 0.20',
            'scaleMode' => '',
            'slotViewState' => '',
            'view' => 1,
            'denomination' => 1,
            'category_temp' => 2,
            'original_id' => 5,
            'bids' => 0,
            'stat_in' => 0,
            'stat_out' => 0,
            'updated_at' => \Carbon\Carbon::now(),
        ]);
    }
}
