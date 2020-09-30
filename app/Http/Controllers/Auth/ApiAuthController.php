<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Registration as Registration;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\User;

class ApiAuthController extends Controller
{
	public function __construct(){
        $this->register = new Registration();
    }

    public function register (Request $request) {
   
	    $data = $request->all();  
	       
        $token =  $this->register->register($data);
        $data =   $this->register->getUserData($token[1]);
	    
	    return response()->json([
                        'token' => $token[0],
                        'user' => $data
                    ],200);
	}

	public function login (Request $request) {

	    
	    $user = User::where('email', $request->email)->first();
	    if ($user) {
	        if (Hash::check($request->password, $user->password)) {
	            $token = $user->createToken('Laravel Password Grant Client')->accessToken;
	            $data =   $this->register->getUserData($request->email);
	             return response()->json([
                        'token' => $token[0],
                        'user' => $data,
                        'status'=> true
                    ],200);
	        } else {
	            $response = ["message" => "Password mismatch"];
	           
	             return response()->json([
                        'message' => "Password mismatch",
                        'status'=> false
                    ],200);
	        }
	    } else {
	       
	        return response()->json([
                        'message' => "User does not exist",
                        'status'=> false
                    ],200);
	    }
	}

	public function logout (Request $request) {
	    $token = $request->user()->token();
	    $token->revoke();
	    $response = ['message' => 'You have been successfully logged out!'];
	    return response($response, 200);
	}
}
