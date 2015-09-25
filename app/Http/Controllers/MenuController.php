<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use App\Menu;
use App\MenuItem;

class MenuController extends Controller
{
    /**
     * Display a listing of all menus.
     *
     * @return Response
     */
    public function index()
    {
        //
        $menus = Menu::all();

        return response()->json(['success' => true, 'menus' => $menus]);
    }

    /**
    * Return a single menu based on a menu slug
    * @param {String} $menuSlug
    * @return Response
    */
    public function getMenu($menuSlug) {
        $menu = Menu::where('slug', $menuSlug)->first();
        $items = $menu->menuItems;

        return response()->json(['success' => true, 'menu' => $menu]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
        $menu = new Menu;
        $menu->title = $request->input('menuTitle');
        $menu->description = $request->input('menuDescription');
        $menu->slug = $this->createSlug($menu->title);
        $result = $menu->save();

        return response()->json(['success' => true, 'result' => $result]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
        $menu = Menu::find($id);
        $menu->title = $request->input('title');
        $menu->slug = $this->createSlug($request->input('title'));
        $menu->description = $request->input('description');
        $result = $menu->save();

        return response()->json(['success' => $result, 'result' => $menu]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
        $deletedRow = Menu::find($id)->delete();
        return response()->json(['success' => true, 'deletedRow' => $deletedRow, 'id' => $id]);
    }

    /**
    * Changes a Menu Title into a url slug. E.g. 'All Day Menu' -> 'all-day-menu'
    * @param {String} $string
    * @return {String} $slug
    */
    private function createSlug($string) {
        return strtolower(str_replace(' ', '-', $string));
    }
}
