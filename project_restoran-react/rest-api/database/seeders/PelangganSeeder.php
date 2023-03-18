<?php

namespace Database\Seeders;

use App\Models\Pelanggan;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PelangganSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
    	$faker = Faker::create();

    	for($i = 1; $i <= 2; ++$i)
    	{
	        $data = [
	        	'pelanggan' => $faker->name,
	        	'alamat' => $faker->city,
	        	'telepon' => $faker->phoneNumber,
	        	'email' => $faker->email,
	        ];

	        Pelanggan::create($data);
	    }  
    }
}
