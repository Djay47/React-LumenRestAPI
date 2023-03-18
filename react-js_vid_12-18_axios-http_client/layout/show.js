import {instance} from './instance.js';

// Pelanggan
/*
export function show()
{
	let id = 3;

	instance.get(`pelanggan/${id}`).then(response => {
		// console.log(response);

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

		let tbody = ``;

		response.data.forEach( element => {
			tbody += `<tr>
						<td>${element.idpelanggan}</td>
						<td>${element.pelanggan}</td>
						<td>${element.alamat}</td>
						<td>${element.email}</td>
						<td>${element.telepon}</td>
					</tr>`;
		})

		document.querySelector('#content').innerHTML = table;
		document.querySelector('#content > table > tbody').innerHTML = tbody;
	});
}
*/

// Menu
/*
export function show()
{
	let id = 11;

	instance.get(`menu/${id}`).then(response => {
		console.log(response.data[0]);
	});
}
*/

// Pesanan
/**/
export function show()
{
	let awal = '2023-02-01';
	let akhir = '2023-02-25';

	instance.get(`pesanan/${awal}/${akhir}`).then(response => {
		console.log(response);
	});
}
