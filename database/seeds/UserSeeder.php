<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->truncate();

        User::create([
            'name' => 'joshua', 
            'email' => 'joshua.yp.huang@gmail.com',
            'password' => bcrypt('joshua')
        ]);
    }
}
