import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import useGet from '../Hook/useGet.js';

function DetailPesanan() {
	const { register, handleSubmit, setValue } = useForm();

	// URL untuk mengambil semua data detailpesanan
	const [url, setUrl] = useState('detailpesanan');

	// Mengambil data detail pesanan berdasarkan variable URL
	const {data} = useGet(url);
	const detailPesanan = data;

	function cari(formValue)
	{
		setUrl(`detailpesanan/${formValue.tglAwal}/${formValue.tglAkhir}`);
	}

	function reset()
	{
		setValue('tglAwal', '') ;
		setValue('tglAkhir', '');

		setUrl('detailpesanan');
	}

	let nomor = 1;

	return (
		<div>
			{/*Header*/}
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Detail Pesanan</h1>
			</div>

			{/*Form Pencarian berdasarkan tanggal*/}
			<div className="row border-bottom border-secondary border-5 mb-2">
				<form onSubmit={handleSubmit(cari)} className="mb-2">
					<div className="row mb-2">
						<label className="col-1 col-form-label">Tanggal:</label>
						
						<div className="col-11 px-0">
							<input type="date" className="col-2 col-form-control h-100 me-2" id="tglAwalInput" {...register('tglAwal', {required: true})}/>
							<span>-</span>
							<input type="date" className="col-2 col-form-control h-100 ms-2" id="tglAkhirInput" {...register('tglAkhir', {required: true})}/>
							<button type="submit" className="btn btn-sm btn-outline-dark mx-4">Cari</button>	
							<button onClick={reset} type="button" className="btn btn-sm btn-outline-dark float-end mt-2 me-3">Reset</button>
						</div>
					</div>
				</form>
			</div>

			{/*Table*/}
			<div className="row ps-2 pe-2">
				<table className="table">
					<thead>
						<tr>
							<th>No.</th>
							<th>Faktur</th>
							<th>Pelanggan</th>
							<th>Tanggal</th>
							<th>Menu</th>
							<th>Harga</th>
							<th>Jumlah</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{
							detailPesanan.map((item, index) => (
								<tr key={index}>
									<td>{nomor++}.</td>
									<td>{item.idpesanan}</td>
									<td>{item.pelanggan}</td>
									<td>{item.tglpesanan}</td>
									<td>{item.menu}</td>
									<td>{item.hargajual}</td>
									<td>{item.jumlah}</td>
									<td>{item.hargajual * item.jumlah}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default DetailPesanan;