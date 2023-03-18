<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function index()
    {
        // $data = User::all(); 
        $data = User::where('posisi', '<>', 'pelanggan')->get();

        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        User::where('iduser', $id)->update($request->all());
    }

    public function register(Request $request)
    {
        /*
        $this->validate($request, [
            'user' => 'required|alpha|min:3',
            'email' => 'required|email',
            'password' => 'required',
            'posisi' => 'required|alpha',
            'status' => 'required',
            'relasi' => 'required',
        ]);
        */

        $data = [
            'user' => $request->input('user'), 
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'api_token' => '000000',
            'posisi' => $request->input('posisi'), 
            'status' => '1',
            'relasi' => $request->input('relasi'),
        ];

        User::create($data);

        return response()->json($data);
    }

    public function login(Request $request)
    {
       $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        // Cek email user
        if ( isset($user) )
        {
	        // Cek status user
	        if ( $user->status === 1 )
	        {
	            // Cek password
	            if ( Hash::check($password, $user->password) )
	            {
	                $token = Str::random(40);

	                User::where('email', $email)->update([
	                    'api_token' => $token,
	                ]);

	                return response()->json([
	                	'token' => $token,
	                	'user' => $user
	                ]);
	            }
	            // Jika password salah
	            else
	            {
	                return response()->json([
	                	'token' => '',
	                	'pesan' => 'Login Gagal. Password salah.'
	                ]);
	            }
	        }
	        // Jika status diblokir
	        else
	        {
	            return response()->json([
                	'token' => '',
                	'pesan' => 'Login Gagal. Akun ini sudah diblokir.'
                ]);
	        }
        }
        // Jika email tidak ditemukan
        else
        {
        	return response()->json([
            	'token' => '',
            	'pesan' => 'Login Gagal. Email tidak ditemukan'
            ]);
        }

    }
}
