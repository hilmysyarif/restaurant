<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;

class AdminController extends Controller
{
    //
    public function index() {
    	return view('admin.admin');
    }

    /**
    * Checks if the user is already logged in and redirects accordingly
    */
    public function getLogin() {
        //If logged in already, redirect to admin
        if(Auth::check()) {
            return view('admin.admin');
        }

        return view('index');
    }
}
