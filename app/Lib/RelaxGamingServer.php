<?php

namespace VanguardLTE\Lib;

use GuzzleHttp\Client;

use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Auth;

class RelaxGamingServer {
    private $httpClient;
    private $env;

    public function __construct($env) {
        $this->env = $env;
    }

    private function getClient()
    {
        $baseUrl = env('RELAX_GAMING_BASE_URL_DEV');
        if ($this->env === 'staging') {
            $baseUrl = env('RELAX_GAMING_BASE_URL_STAGING');
        } else if ($this->env === 'prod') {
            $baseUrl = env('RELAX_GAMING_BASE_URL_PROD');
        }

        if (!isset($this->httpClient)) {
            $this->httpClient = new Client([
                'base_uri' => $baseUrl,
                'headers' => [
                    'Content-Type' => 'application/json',
                ]
            ]);
        }

        return $this->httpClient;
    }

    public function verifyToken($token){
        $client = $this->getClient();

        try{
            $result = $client->request('POST', 'verifyToken',
                ['body' => json_encode([
                    "token" => $token
                ])]
            );
        } catch (RequestException $exception){
            Info($exception->getMessage());
            return ['error' => true, 'text' => __('app.something_went_wrong')];
        }
        $userObj = $this->fetchUsername($token);
        $tokenObj = json_decode($result->getBody()->getContents(), true);
        $tokenObj['username'] = $userObj['cutomerusername'];

        $this->handleUserConversion($tokenObj);


        session()->put('relaxgaming-token', $tokenObj);

        return $tokenObj;

    }

    public function fetchUsername($token) {
        $client = $this->getClient();

        try{
            $result = $client->request('POST', 'getUser',
                ['body' => json_encode([
                    "token" => $token
                ])]
            );
        } catch (RequestException $exception){
            Info($exception->getMessage());
            return ['error' => true, 'text' => __('app.something_went_wrong')];
        }
        return json_decode($result->getBody()->getContents(), true);
    }

    public function handleUserConversion($tokenObj) {
        $user = \VanguardLTE\User::where('customer_id', '=', $tokenObj['customerid'])->first();
        if (!$user) {
            $shop = \VanguardLTE\Shop::where('name', 'main_shop')->first();
            $mainShop = \VanguardLTE\User::where('username', 'main_shop')->first();
            // Then we need to insert a new user
            $role = \jeremykenedy\LaravelRoles\Models\Role::find(1);
            $newUser = new \VanguardLTE\User([
                'username' => $tokenObj['username'],
                'email' => $tokenObj['cashiertoken'] . '@test.com',
                'role_id' => $role->id,
                'status' => 'Active',
                'created_at' => time(),
                'customer_id' => $tokenObj['customerid'],
                'cashier_token' => $tokenObj['cashiertoken'],
                'shop_id' => $shop->id,
                'parent_id' => $mainShop->id,
                'parents' => '[1][549]',
                'env' => $this->env
            ]);
            $newUser->setPasswordAttribute('password');
            $newUser->save();
            $newUser->attachRole($role);
            if ($tokenObj['balance'] > 0) {
                $newUser->balance = (string)((int)$tokenObj['balance']) / 100;
            }
            // Assign the user to the demo shop
            \VanguardLTE\ShopUser::create([
                'shop_id' => $shop->id,
                'user_id' => $newUser->id
            ]);
            session()->put('relaxgaming-user', $newUser->email);
            Auth::login($newUser, true);
            event(new \VanguardLTE\Events\User\LoggedIn());
        } else {
            $user->balance = (string)((int)$tokenObj['balance']) / 100;
            $user->cashier_token = $tokenObj['cashiertoken'];
            $user->username = $tokenObj['username'];
            $user->env = $this->env;
            $user->update();
            Auth::login($user, true);
            session()->put('relaxgaming-user', $user->email);
            event(new \VanguardLTE\Events\User\LoggedIn());
        }
    }

    public function getBalance(){

        $client = $this->getClient();

        $cashiertoken = session()->get('relaxgaming-token')['cashiertoken'];

        try{
            $result = $client->request('POST', 'getBalance',
                ['body' => json_encode([
                    "cashiertoken" => $cashiertoken
                ])]
            );
        } catch (RequestException $exception){
            Info($exception->getMessage());
            return ['error' => true, 'text' => __('app.something_went_wrong')];
        }


        $balanceObj = json_decode($result->getBody()->getContents(), true);

        return $balanceObj;

    }
}
