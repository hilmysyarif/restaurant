<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    //
    protected $table = 'menus';

    public function menuItems() {
    	return $this->hasMany('App\MenuItem');
    }

}
