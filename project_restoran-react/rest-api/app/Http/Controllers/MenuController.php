<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('menus')
                    ->join('kategoris', 'kategoris.idkategori', '=', 'menus.idkategori')
                    ->select('menus.*', 'kategoris.kategori')
                    ->get();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        /**/
        $this->validate($request, [
            'idkategori' => 'required|numeric',
            'menu' => 'required',
            'gambar' => 'required',
            'harga' => 'required|numeric'
        ]);

        $gambar = $request->file('gambar')->getClientOriginalName();
        $request->file('gambar')->move('upload', $gambar);

        $data = [
            'idkategori' => $request->input('idkategori'),
            'menu' => $request->input('menu'),
            'gambar' => url("upload/$gambar"),
            'harga' => $request->input('harga')
        ];

        $menu = Menu::create($data);

        if($menu) {
            return response()->json([
                'pesan' => 'Data sudah dimasukkan',
                'menu' => $menu
            ]);
        }
        

        // Model sederhana untuk testing
        /*
        $this->validate($request, [
            'idkategori' => 'required|numeric',
            'menu' => 'required',
            'gambar' => 'required',
            'harga' => 'required|numeric'
        ]);

        $menu = Menu::create($request->all());
        
        if($menu) {
            return response()->json([
                'pesan' => 'Data sudah dimasukkan',
                'menu' => $menu
            ]);
        }
        */
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = DB::table('menus')
                    ->join('kategoris', 'kategoris.idkategori', '=', 'menus.idkategori')
                    ->select('menus.*', 'kategoris.kategori')
                    ->where('idmenu', '=', $id )
                    ->get();

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        /**/
        // Cek apakah gambar diperbarui atau tidak
        if ($request->hasFile('gambar'))
        {
            $gambar = $request->file('gambar')->getClientOriginalName();
            $request->file('gambar')->move('upload', $gambar);

            $data = [
                'idkategori' => $request->input('idkategori'),
                'menu' => $request->input('menu'),
                'gambar' => url("upload/$gambar"),
                'harga' => $request->input('harga')
            ];
        }
        else
        {
            $data = [
                'idkategori' => $request->input('idkategori'),
                'menu' => $request->input('menu'),
                'harga' => $request->input('harga')
            ];
        }

        Menu::where('idmenu', $id)->update($data);

        return response()->json("Data dengan ID-$id diperbarui");
        

        // Model sederhana untuk testing
        /*
        // Cek apakah gambar diperbarui atau tidak
        if ($request->hasFile('gambar'))
        {
            $gambar = $request->file('gambar')->getClientOriginalName();
            $request->file('gambar')->move('upload', $gambar);

            $data = [
                'idkategori' => $request->input('idkategori'),
                'menu' => $request->input('menu'),
                'gambar' => url("upload/$gambar"),
                'harga' => $request->input('harga')
            ];
        }
        else
        {
            $data = [
                'idkategori' => $request->input('idkategori'),
                'menu' => $request->input('menu'),
                'harga' => $request->input('harga')
            ];
        }

        return response()->json($data);
        */
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Menu::where('idmenu', $id)->delete();

        return response()->json("Data dengan ID-$id sudah dihapus");
    }
}
