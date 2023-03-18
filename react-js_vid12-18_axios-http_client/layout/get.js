import {instance} from './instance.js';

/*
export function get()
{
	instance.get('pelanggan').then(response => {
		// console.log(response.data);

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
					</tr>`
		})

		document.querySelector('#content').innerHTML = table;
		document.querySelector('#content > table > tbody').innerHTML = tbody;
	});
}
*/

/*
export function get()
{
	instance.get('menu').then(response => console.log(response.data));
}
*/

export function get()
{
	instance.get('pesanan').then(response => console.log(response.data));
}