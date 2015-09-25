<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/login', 'AdminController@getLogin');
Route::post('/auth/login', 'Auth\AuthController@postLogin');
Route::get('/auth/logout', 'Auth\AuthController@getLogout');

//Authenticated users only
Route::group(['prefix' => 'admin', 'middleware' => 'auth'], function() {
	Route::get('/', 'AdminController@index');

	Route::group(['prefix' => 'api'], function() {
		Route::post('home', 'HomeController@store');

		Route::post('menu', 'MenuController@store');
		Route::delete('menu/{id}', 'MenuController@destroy');
		Route::put('menu/{id}', 'MenuController@update');

		Route::post('menu/{menuSlug}', 'MenuItemController@store');
		Route::delete('menu/{menuSlug}/{id}', 'MenuItemController@destroy');

		Route::put('contact', 'ContactController@update');

		Route::post('about', 'AboutController@store');
	});

	Route::get('{catchAll}', function() {
		return view('admin.admin');
	})->where('catchAll', '(.*)');
});

Route::post('/contact/process-form', 'ContactController@sendForm');

Route::group(['prefix' => 'api'], function() {
	Route::get('home', 'HomeController@index');
	Route::get('about', 'AboutController@index');
	Route::get('contact', 'ContactController@index');
	Route::get('menu', 'MenuController@index');
	Route::get('menu/{menuSlug}', 'MenuController@getMenu');
	Route::get('menu/{menuSlug}/items', 'MenuItemController@index');
});

//Catch all route
Route::get('{catchAll}', function() {
	return view('index');
})->where('catchAll', '(.*)');