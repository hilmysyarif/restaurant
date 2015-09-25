<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Mail;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Settings;

class ContactController extends Controller
{
    /**
    * Retrieve the contact settings
    *
    * @return Response
    */
    public function index() {
        $all = Settings::all();
        $phone = $all->where('name', 'phone')->first();
        $email = $all->where('name', 'email')->first();
        $address1 = $all->where('name', 'address1')->first();
        $address2 = $all->where('name', 'address2')->first();
        $address3 = $all->where('name', 'address3')->first();
        $address4 = $all->where('name', 'address4')->first();
        $monday = $all->where('name', 'monday')->first();
        $tuesday = $all->where('name', 'tuesday')->first();
        $wednesday = $all->where('name', 'wednesday')->first();
        $thursday = $all->where('name', 'thursday')->first();
        $friday = $all->where('name', 'friday')->first();
        $saturday = $all->where('name', 'saturday')->first();
        $sunday = $all->where('name', 'sunday')->first();

        $settings = [
            'phone' => $phone->value,
            'email' => $email->value,
            'address' => [
                'line1' => $address1->value,
                'line2' => $address2->value,
                'line3' => $address3->value,
                'line4' => $address4->value
            ],
            'hours' => [
                'monday' => $monday->value,
                'tuesday' => $tuesday->value,
                'wednesday' => $wednesday->value,
                'thursday' => $thursday->value,
                'friday' => $friday->value,
                'saturday' => $saturday->value,
                'sunday' => $sunday->value
            ]
        ];

        return response()->json(['success' => true, 'data' => $settings]);
    }

    /**
    * Send the contact form
    *
    * @param Request $request
    * @return Response
    */
    public function sendForm(Request $request) {
    	$data['to'] = 'joshua.yp.huang@gmail.com';
    	$data['name'] = $request->input('name.value', 'No Name Given');
    	$data['phone'] = $request->input('phone.value', 'No Number Given');
    	$data['email'] = $request->input('email.value', 'mr_funsocks@hotmail.com');
    	$data['body'] = $request->input('message.value', 'No Message Given');
    	$data['subject'] = $request->input('subject.value', 'No Subject Given');

    	Mail::send(['text' => 'emails.contact'], $data, function($message) use (&$data) {
    		$message->from($data['email']);
    		$message->to($data['to']);
    		$message->subject($data['subject']);
    	});

    	return response()->json(['success' => true]);
    }

    /**
    * Update the contact settings
    *
    * @param Request $request
    * @return Response
    */
    public function update(Request $request) {
        $email = Settings::firstOrNew(['name' => 'email']);
        $email->value = $request->input('email');
        $email->save();

        $phone = Settings::firstOrNew(['name' => 'phone']);
        $phone->value = $request->input('phone');
        $phone->save();

        $address1 = Settings::firstOrNew(['name' => 'address1']);
        $address1->value = $request->input('address.line1');
        $address1->save();

        $address2 = Settings::firstOrNew(['name' => 'address2']);
        $address2->value = $request->input('address.line2');
        $address2->save();

        $address3 = Settings::firstOrNew(['name' => 'address3']);
        $address3->value = $request->input('address.line3');
        $address3->save();

        $address4 = Settings::firstOrNew(['name' => 'address4']);
        $address4->value = $request->input('address.line4');
        $address4->save();

        $monday = Settings::firstOrNew(['name' => 'monday']);
        $monday->value = $request->input('hours.monday');
        $monday->save();

        $tuesday = Settings::firstOrNew(['name' => 'tuesday']);
        $tuesday->value = $request->input('hours.tuesday');
        $tuesday->save();

        $wednesday = Settings::firstOrNew(['name' => 'wednesday']);
        $wednesday->value = $request->input('hours.wednesday');
        $wednesday->save();

        $thursday = Settings::firstOrNew(['name' => 'thursday']);
        $thursday->value = $request->input('hours.thursday');
        $thursday->save();

        $friday = Settings::firstOrNew(['name' => 'friday']);
        $friday->value = $request->input('hours.friday');
        $friday->save();

        $saturday = Settings::firstOrNew(['name' => 'saturday']);
        $saturday->value = $request->input('hours.saturday');
        $saturday->save();

        $sunday = Settings::firstOrNew(['name' => 'sunday']);
        $sunday->value = $request->input('hours.sunday');
        $sunday->save();

        $settings = [
            'phone' => $phone->value,
            'email' => $email->value,
            'address' => [
                'line1' => $address1->value,
                'line2' => $address2->value,
                'line3' => $address3->value,
                'line4' => $address4->value
            ],
            'hours' => [
                'monday' => $monday->value,
                'tuesday' => $tuesday->value,
                'wednesday' => $wednesday->value,
                'thursday' => $thursday->value,
                'friday' => $friday->value,
                'saturday' => $saturday->value,
                'sunday' => $sunday->value,
            ]
        ];

        return response()->json(['success' => true, 'data' => $settings]);
    }
}