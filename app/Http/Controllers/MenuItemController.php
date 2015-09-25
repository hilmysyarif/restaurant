<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Menu;
use App\MenuItem;

class MenuItemController extends Controller
{

    /**
     * Show menu items for the given menu slug
     *
     * @param  String $slug
     * @return Response
     */
    public function index($menuSlug)
    {
        //
        $menuItems = Menu::where('slug', $menuSlug)->first()->menuItems;
        return response()->json(['success' => true, 'menuItems' => $menuItems]);
    }

    /**
    * Save a menu item to a given menu slug
    *
    * @param Request $request
    * @param String $menuSlug
    *
    * @return Response
    */
    public function store(Request $request, $menuSlug) {
        $menuID = Menu::where('slug', $menuSlug)->first()->id;
        $menuItem = new MenuItem;
        $menuItem->title = $request->input('title');
        $menuItem->description = $request->input('description');
        $menuItem->price = $request->input('price');
        $menuItem->menu_id = $menuID;
        $menuItem->save();

        return response()->json(['success' => true, 'menuItem' => $menuItem]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($menuSlug, $id)
    {
        $deletedRow = MenuItem::find($id)->delete();

        return response()->json(['success' => true, 'deleted' => $deletedRow]);
    }
}
