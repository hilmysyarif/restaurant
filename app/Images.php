<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    //
    protected $table = 'images';
    protected $fillable = ['slug', 'original', 'size_2000', 'size_1200', 'size_600'];
}
