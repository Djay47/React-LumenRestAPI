import {instance} from './instance.js';

export function destroy()
{
	let id = 16;

	instance.delete(`pelanggan/${id}`).then(response => {
		// console.log(response);

		let pesan = `<p>${response.data}</p>`;

		document.querySelector('#content').innerHTML = pesan;
	});
}