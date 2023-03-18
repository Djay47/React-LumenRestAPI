import {instance} from './instance.js';


export function post()
{
	let data = {
		pelanggan	: 'pelanggan axios',
		alamat 		: 'alamat axios',
		telepon 	: 'telepon axios',
		email 		: 'email axios',
	}

	instance.post('pelanggan', data).then(response => {
		// console.log(response.data);					

		let pesan = `<p>${response.data.pesan}</p>`;

		let table = `<table class="table">
						<thead>
							<tr>
								<th>ID</th>
								<th>Pelanggan</th>
								<th>Alamat</th>
								<th>Email</th>
								<th>Telepon</th>
							</tr>
						</thead>
						<tbody></tbody>
					</table>`;

		let tbody = `<tr>
						<td>${response.data.pelanggan.id}</td>
						<td>${response.data.pelanggan.pelanggan}</td>
						<td>${response.data.pelanggan.alamat}</td>
						<td>${response.data.pelanggan.email}</td>
						<td>${response.data.pelanggan.telepon}</td>
					</tr>`;

		document.querySelector('#content').innerHTML = pesan;
		document.querySelector('#content').innerHTML += table;
		document.querySelector('#content > table > tbody').innerHTML = tbody;
	});
}
/**/

// Tes untuk pelanggan
/*
export function post()
{
	let data = {
		pelanggan	: 'pelanggan axios',
		alamat 		: 'alamat axios',
		telepon 	: 'telepon axios',
		email 		: 'email axios',
	}

	instance.post('pelanggan', data).then(response => console.log(response.data));
}
*/

// Tes untuk menu
/*
export function post()
{
	let data = {
		idkategori	: 2,
		menu 				: 'Makanan Penutup 2',
		gambar 			: 'makanan_penutup-2.jpg',
		harga 			: 3000,
	}

	instance.post('menu', data).then(response => console.log(response.data));
}
*/