<?php

namespace VanguardLTE\Lib;

use GuzzleHttp\Client;

use GuzzleHttp\Exception\RequestException;

class RelaxGamingServer {
    private $httpClient;

    private function getClient()
    {
        if (!isset($this->httpClient)) {
            $this->httpClient = new Client([
                'base_uri' => env('RELAX_GAMING_BASE_URL'),
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


        $tokenObj = json_decode($result->getBody()->getContents(), true);
        
        session()->put('relaxgaming-token', $tokenObj);
        
        return $tokenObj;

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