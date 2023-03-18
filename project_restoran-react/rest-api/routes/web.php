<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('api/register', ['uses' => 'LoginController@register']);
$router->post('api/login', ['uses' => 'LoginController@login']);

$router->group( ['prefix' => 'api', 'middleware' => 'auth'], function() use ($router) {
	
	// User
	$router->get('administrator', ['uses' => 'LoginController@index']);
	$router->put('administrator/{id}', ['uses' => 'LoginController@update']);

	// Kategori
	$router->get('kategori', ['uses' => 'KategoriController@index']);
	$router->get('kategori/{id}', ['uses' => 'KategoriController@show']);
	$router->delete('kategori/{id}', ['uses' => 'KategoriController@destroy']);
	$router->put('kategori/{id}', ['uses' => 'KategoriController@update']);
	$router->post('kategori', ['uses' => 'KategoriController@create']);

	// Pelanggan
	$router->get('pelanggan', ['uses' => 'PelangganController@index']);
	$router->get('pelanggan/{id}', ['uses' => 'PelangganController@show']);
	$router->delete('pelanggan/{id}', ['uses' => 'PelangganController@destroy']);
	$router->put('pelanggan/{id}', ['uses' => 'PelangganController@update']);
	$router->post('pelanggan', ['uses' => 'PelangganController@create']);

	// Menu
	$router->get('menu', ['uses' => 'MenuController@index']);
	$router->get('menu/{id}', ['uses' => 'MenuController@show']);
	$router->delete('menu/{id}', ['uses' => 'MenuController@destroy']);
	$router->post('menu/{id}', ['uses' => 'MenuController@update']);
	$router->post('menu', ['uses' => 'MenuController@create']);

	// Pesanan
	$router->get('pesanan', ['uses' => 'PesananController@index']);
	$router->get('pesanan/{awal}/{akhir}', ['uses' => 'PesananController@show']);
	$router->put('pesanan/{id}', ['uses' => 'PesananController@update']);

	// Detail Pesanan
	$router->get('detailpesanan', ['uses' => 'DetailPesananController@index']);
	$router->get('detailpesanan/{awal}/{akhir}', ['uses' => 'DetailPesananController@show']);
} );

