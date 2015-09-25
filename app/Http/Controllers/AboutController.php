<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Images;
use Intervention\Image\Facades\Image;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $images[] = Images::where('slug', 'galleryOne')->first();
        $images[] = Images::where('slug', 'galleryTwo')->first();
        $images[] = Images::where('slug', 'galleryThree')->first();
        $images[] = Images::where('slug', 'galleryFour')->first();
        $images[] = Images::where('slug', 'galleryFive')->first();
        $images[] = Images::where('slug', 'gallerySix')->first();
        $images[] = Images::where('slug', 'gallerySeven')->first();
        $images[] = Images::where('slug', 'galleryEight')->first();

        return response()->json([
            'success' => true,
            'images' => $images
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->storeImage($request, 'galleryOne', 'galleryOne');
        $this->storeImage($request, 'galleryTwo', 'galleryTwo');
        $this->storeImage($request, 'galleryThree', 'galleryThree');
        $this->storeImage($request, 'galleryFour', 'galleryFour');
        $this->storeImage($request, 'galleryFive', 'galleryFive');
        $this->storeImage($request, 'gallerySix', 'gallerySix');
        $this->storeImage($request, 'gallerySeven', 'gallerySeven');
        $this->storeImage($request, 'galleryEight', 'galleryEight');

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
