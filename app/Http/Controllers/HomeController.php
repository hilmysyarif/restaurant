<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Images;
use Intervention\Image\Facades\Image;

class HomeController extends Controller
{
    /**
    * Retrieve the featured images on the Home Page
    *
    * @return Response
    */
    public function index() {
    	$images[] = Images::where('slug', 'homeFeaturedOne')->first();
    	$images[] = Images::where('slug', 'homeFeaturedTwo')->first();
    	$images[] = Images::where('slug', 'homeFeaturedThree')->first();
    	$images[] = Images::where('slug', 'homeFeaturedFour')->first();

    	return response()->json([
    		'success' => true,
    		'images' => $images
    	]);
    }

    /**
    * Store the featured images for the home page
    * @param Request $request
    * @return Response
    */
    public function store(Request $request) {
        $this->storeImage($request, 'homeFeaturedOne', 'homeFeaturedOne');
        $this->storeImage($request, 'homeFeaturedTwo', 'homeFeaturedTwo');
        $this->storeImage($request, 'homeFeaturedThree', 'homeFeaturedThree');
        $this->storeImage($request, 'homeFeaturedFour', 'homeFeaturedFour');

        return response()->json(['success' => true]);
    }

    /**
    * Resizes an image to widths to 2000, 1200, 600 and then stores in the given folder.
    * @param {Request} $request
    * @param {String} $imageSlug
    * @return void
    */
    private function storeImage($request, $folder, $imageSlug) {
        if($request->hasFile($imageSlug)) {
            $image = $request->file($imageSlug);
            $fileName = $imageSlug . '.' . $image->getClientOriginalExtension();
            $destination = public_path('images/upload/' . $folder . '/');
            $originalFile = $destination . $fileName;
            $widths = [2000, 1200, 600];
            $relativePath = '\\images\\upload\\' . $folder . '\\';

            $image->move($destination, $fileName);
           
            $images = $this->resizeImage($originalFile, $widths, $destination, $fileName, $relativePath);

            //Delete old images
            $oldImages = Images::where('slug', $imageSlug)->delete();

            Images::create([
                'slug' => $imageSlug, 
                'original' => $images['original'],
                'size_2000' => $images['2000'],
                'size_1200' => $images['1200'],
                'size_600' => $images['600']
            ]);
        }
    }


    private function resizeImage($original, $widths, $directory, $fileName, $relativePath) {
        $images = [
            "original" => $relativePath . $fileName
        ];

        foreach($widths as $width) {
            $resizedName = $width . '-' . $fileName;

            $img = Image::make($original)->resize($width, null, function($constraint){
                $constraint->aspectRatio();
                $constraint->upsize();
            })->save($directory . $resizedName);

            $images[$width] = $relativePath . $resizedName;
        }

        return $images;
    }
}
