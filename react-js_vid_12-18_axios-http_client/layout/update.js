import {instance} from './instance.js';

// Update Data Pelanggan
/*
export function update()
{
	let id = 15;
	let data = {
		pelanggan	: 'pelanggan update',
		alamat 		: 'alamat update',
		telepon 	: 'telepon update',
		email 		: 'email update',
	};

	instance.put(`pelanggan/${id}`, data).then(response => {
		// console.log(response);

		let pesan = `<p>${response.data}</p>`;

		document.querySelector('#content').innerHTML = pesan;
	});
}
*/

// Update Data Menu
/*
export function update()
{
	let id = 11;
	let data = {
		idkategori: 11,
		menu: 'Martabak Telur',
		gambar: 'http://localhost:8000/upload/martabak-telur.jpg',
		harga : 10000
	};

	instance.put(`menu/${id}`, data).then(response => {
		console.log(response);
	});
}
*/

// Update Data Pesanan
/**/
export function update()
{
	let id = 1;
	let data = {
		bayar		: 0,
		kembali	: 0,
		state		: 1
	};

	instance.put(`pesanan/${id}`, data).then(response => {
		console.log(response);
	});
}