<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Seeder;
// use Faker\FActory as Faker;


class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
    	// $faker = Faker::create();

        $data = [
        	'kategori' => 'Minuman',
        	'keterangan' => 'Minuman',
        ];

        Kategori::create($data);
    }
}
