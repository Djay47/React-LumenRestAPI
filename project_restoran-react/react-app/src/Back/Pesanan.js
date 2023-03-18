import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import useGet from '../Hook/useGet.js';
import Modal from 'react-modal';
import { instance } from '../Axios/instance.js';

Modal.setAppElement('#root');

function Pesanan() {
	// Konfigurasi Modal
	const [modalIsOpen, setIsOpen] = useState(false);

	const { register, handleSubmit, setValue, formState: { errors } } = useForm();

	// URL untuk mengambil semua data pesanan
	const [url, setUrl] = useState('pesanan');

	// Mengambil data pesanan berdasarkan variable url
	const {data} = useGet(url);
	const pesanan = data;

	// ----
	const [total, setTotal] = useState(0);
	const [bayar, setBayar] = useState(0);
	const [pelanggan, setPelanggan] = useState('');
	const [idpesanan, setIdPesanan] = useState('');

	// Mengatur URL untuk mengambil data pesanan sesuai rentang tanggal
	function cari(formValue)
	{
		if ( formValue.tglAwal === '' || formValue.tglAkhir === ''){
			setUrl('pesanan');
		} else {
			setUrl(`pesanan/${formValue.tglAwal}/${formValue.tglAkhir}`);
		}
	}

	// Mengatur ulang URL untuk mengmbail semua data pesanan
	function reset()
	{
		setValue('tglAwal', '');
		setValue('tglAkhir', '');

		setUrl('pesanan');
	}

	function filterData(id)
	{
		const data = pesanan.filter( (item) => item.idpesanan === id )

		setIdPesanan(data[0].idpesanan);
		setPelanggan(data[0].pelanggan);
		setTotal(data[0].total);
		setBayar(data[0].bayar);
		
		setIsOpen(true);
	}

	async function simpan(formValue)
	{
		const bayar = Number(formValue.bayar);
		const kembali = (bayar === 0) ? 0 : bayar - formValue.total;
		const status = (bayar === 0) ? 0 : 1;

		const data = { bayar: bayar, kembali: kembali, state: status };

		const response = await instance.put(`pesanan/${idpesanan}`, data);

		setIsOpen(false);
		window.confirm(response.data);
	}

	let nomor = 1;

	return (
		<div>
			{/*Header*/}
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Daftar Pesanan</h1>
			</div>

			{/*Form pencarian berdasarkan tanggal*/}
			<div className="row border-bottom border-secondary border-5 mb-2">
				<form onSubmit={handleSubmit(cari)} className="mb-2">
					<div className="row mb-2">
						<label className="col-1 col-form-label">Tanggal:</label>
						
						<div className="col-11 px-0">
							<input type="date" className="col-2 col-form-control h-100 me-2" id="tglAwalInput" {...register('tglAwal', {required: false})}/>
							<span>-</span>
							<input type="date" className="col-2 col-form-control h-100 ms-2" id="tglAkhirInput" {...register('tglAkhir', {required: false})}/>
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
							<th>Tanggal</th>
							<th>Pelanggan</th>
							<th>Total</th>
							<th>Bayar</th>
							<th>Kembali</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{
							pesanan.map((item, index) => (
								<tr key={index}>
									<td>{nomor++}.</td>
									<td>{item.idpesanan}</td>
									<td>{item.tglpesanan}</td>
									<td>{item.pelanggan}</td>
									<td>{item.total}</td>
									<td>{item.bayar}</td>
									<td>{item.kembali}</td>
									<td>
										{
											(item.state === 1)
											?
												<button onClick={ () => filterData(item.idpesanan) } className="btn btn-sm btn-outline-success">✔</button>
											:
												<button onClick={ () => filterData(item.idpesanan) } className="btn btn-sm btn-outline-danger">❌</button>
										}
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>

		{/*Modal*/}
		<Modal
			isOpen = {modalIsOpen}
			onRequestClose = { () => setIsOpen(false) }
			onAfterOpen = { () => {
				setValue('total', total);
				setValue('bayar', bayar);
			}}
			style = { 
				{ 
					overlay: {}, 
					content: {
						top: '30%',
						left: '30%',
						right: '30%',
						bottom: '30%',
						padding: '10px 20px'
					} 
				}
			}
		>
			<div className="row border-bottom border-3 border-secondary mb-3">
				<h4 className="p-0">Pembayaran Pesanan - {pelanggan}</h4>
			</div>
			
			<div className="row">
				<form onSubmit={handleSubmit(simpan)} className="mb-2">
					<div className="mb-2 row">
						<label htmlFor="totalInput" className="col-sm-2 col-form-label ps-0">Total</label>
						<div className="col-sm">
							<input type="number" className="form-control" id="totalInput" {...register('total', {required: false})} disabled/>
						</div>
					</div>
					
					<div className="mb-3 row">
						<label htmlFor="bayarInput" className="col-sm-2 col-form-label ps-0">Bayar</label>
						<div className="col-sm">
							<input type="number" className="form-control" id="bayarInput" {...register('bayar', {required: false, min:total})}/>
						</div>
						{errors.bayar && <span><em>Nominal pembayaran masih kurang</em></span>}
					</div>
					
					<button type="submit" className="btn btn-sm btn-secondary float-end">Simpan</button>
					<button
						type="button" className="btn btn-sm btn-outline-secondary float-end me-3"
						onClick={ () => {
							setIsOpen(false);
							setValue('bayar', '');
						}}
					>
						Batal
					</button>
				</form>
			</div>
		</Modal>
		</div>
	)
}

export default Pesanan;
