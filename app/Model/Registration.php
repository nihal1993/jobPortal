<?php

namespace App\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use App\User;
use DB;

class Registration extends Model
{

	public function register($data){

		
        $UserData =  $this->addUser($data);
		if(isset($data['skills']) && $data['skills'] != null ){
			$addUser = $this->addCandidate($data,$UserData->id);
		}else{
			$addUser = $this->addCompany($data,$UserData->id);
		}

		$token = $UserData->createToken('Laravel Password Grant Client')->accessToken;
		return [$token,$UserData->id];
	}
    

	public function addUser($data){

		$password = $data["password"];
	    $user = new User();        
		$user->name = $data['name'];  
		$user->email = $data['email']; 
		$user->password = Hash::make($password); 
		$user->remember_token = Str::random(10); 
        $user->save();
        return $user;
	}

	public function addCompany($data,$userId){
		

		$arrayInsert = array(
			'user_id' => $userId,
			'address' => $data['location'],
			'contact' => $data['contact'],
		);

		$userId = DB::table('companies')->insertGetId($arrayInsert);

		if($userId > 0){
			return array(
					'status' => true,
					'userId' => $userId
				);
		}else{
			return array(
					'status' => false
				);
		}
	}

	public function addCandidate($data){

		$arrayInsert = array(
			'user_id' => $userId,
			'address' => $data['location'],
			'contact' => $data['contact'],
			'skills'     => $data['skills'],
		);

		$userId = DB::table('candidates')->insertGetId($arrayInsert);

		if($userId > 0){
			return array(
					'status' => true,
					'userId' => $userId
				);
		}else{
			return array(
					'status' => false
				);
		}
	}

	public function getUserData($id){

		$data = DB::table('users')
            ->join('companies', 'companies.user_id', '=', 'users.id')
            ->where('users.id',$id)
            ->get();
		
		return $data->toarray();
	}


}
