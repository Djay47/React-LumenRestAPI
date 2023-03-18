<?php

namespace App\Http\Controllers;

use App\Models\DetailPesanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DetailPesananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('detail_pesanans')
                    ->join('pesanans', 'pesanans.idpesanan', '=', 'detail_pesanans.idpesanan')
                    ->join('menus', 'menus.idmenu', '=', 'detail_pesanans.idmenu')
                    ->join('pelanggans', 'pelanggans.idpelanggan', '=', 'pesanans.idpelanggan')
                    ->join('kategoris', 'kategoris.idkategori', '=', 'menus.idkategori')
                    ->select('detail_pesanans.*', 'pesanans.*', 'menus.*', 'pelanggans.*', 'kategoris.*')
                    ->orderBy('pesanans.tglpesanan', 'asc')
                    ->get();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\DetailPesanan  $detailPesanan
     * @return \Illuminate\Http\Response
     */
    public function show($awal, $akhir)
    {
        $data = DB::table('detail_pesanans')
                    ->join('pesanans', 'pesanans.idpesanan', '=', 'detail_pesanans.idpesanan')
                    ->join('menus', 'menus.idmenu', '=', 'detail_pesanans.idmenu')
                    ->join('pelanggans', 'pelanggans.idpelanggan', '=', 'pesanans.idpelanggan')
                    ->join('kategoris', 'kategoris.idkategori', '=', 'menus.idkategori')
                    ->select('detail_pesanans.*', 'pesanans.*', 'menus.*', 'pelanggans.*', 'kategoris.*')
                    ->where('tglpesanan', '>=', $awal)
                    ->where('tglpesanan', '<=', $akhir)
                    ->orderBy('pesanans.tglpesanan', 'asc')
                    ->get();

        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DetailPesanan  $detailPesanan
     * @return \Illuminate\Http\Response
     */
    public function edit(DetailPesanan $detailPesanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DetailPesanan  $detailPesanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DetailPesanan $detailPesanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DetailPesanan  $detailPesanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(DetailPesanan $detailPesanan)
    {
        //
    }
}
