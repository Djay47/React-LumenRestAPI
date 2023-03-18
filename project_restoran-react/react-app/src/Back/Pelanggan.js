import React from 'react';
import useGet from '../Hook/useGet.js';
import useDelete from '../Hook/useDelete.js';

function Pelanggan() {
	const {data} = useGet('pelanggan');
	const pelanggan = data;

	const {hapus, pesan} = useDelete('pelanggan');

	let nomor = 1;

	return (
		<div>
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Daftar Pelanggan</h1>
			</div>

			<div className="row">
				<span>{pesan}</span>
			</div>

			<div className="row ps-2 pe-2">
				<table className="table">
					<thead>
						<tr>
							<th>No.</th>
							<th>Pelanggan</th>
							<th>Alamat</th>
							<th>No. Telepon</th>
							<th>Email</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							pelanggan.map((item, index) => (
								<tr key={index}>
									<td>{nomor++}.</td>
									<td>{item.pelanggan}</td>
									<td>{item.alamat}</td>
									<td>{item.telepon}</td>
									<td>{item.email}</td>
									<td>
										<button onClick={() => hapus(item.idpelanggan)} className="btn btn-sm btn-outline-dark">Hapus</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Pelanggan;