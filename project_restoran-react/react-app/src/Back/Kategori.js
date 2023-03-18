import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { instance } from '../Axios/instance.js';
import useGet from '../Hook/useGet.js';

function Kategori() {
	const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
	
	// Get Data
	const {data} = useGet('kategori');
	const kategori = data;
	
	const [idKategori, setIdKategori] = useState('');
	
	const [pesan, setPesan] = useState('');
	
	const [pilihan, setPilihan] = useState(true);

	// Set tombol Simpan untuk Insert dan Update Data
	function simpan(data)
	{
		if(pilihan)
		{
			instance.post('kategori', data).then(response => setPesan(response.data.pesan));	// Insert Data
		}
		else
		{
			instance.put(`kategori/${idKategori}`, data).then(response => setPesan(response.data)); // Update Data
			setPilihan(true);
		}

		reset();
	}

	// Menampilkan data yang akan diubah ke dalam form
	async function showData(id)
	{
		const response = await instance.get(`/kategori/${id}`);
		setValue('kategori', response.data[0].kategori);
		setValue('keterangan', response.data[0].keterangan);
		setIdKategori(response.data[0].idkategori);

		setPilihan(false);
	}

	// Delete Data
	async function hapus(id)
	{
		if ( window.confirm('Data akan dihapus') )
		{
			const response = await instance.delete(`kategori/${id}`);
			setPesan(response.data);
		}
	}

	//  Sebagai penomoran table
	let nomor = 1;	

	return (
		<>
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Daftar Kategori</h1>
			</div>

			<div className="row border-bottom border-secondary border-5 mb-2">
				<form onSubmit={handleSubmit(simpan)} className="mb-2">
					<div className="mb-2 row">
						<label htmlFor="kategoriInput" className="col-sm-1 col-form-label">Kategori</label>
						<div className="col-sm-4">
							<input type="text" className="form-control" id="kategoriInput" {...register('kategori', {required: true})}/>
						</div>
						{errors.kategori && <span><em>This field is required</em></span>}
					</div>
					
					<div className="mb-3 row">
						<label htmlFor="keteranganInput" className="col-sm-1 col-form-label">Keterangan</label>
						<div className="col-sm-4">
							<input type="text" className="form-control" id="keteranganInput" {...register('keterangan', {required: true})}/>
						</div>
						{errors.keterangan && <span><em>This field is required</em></span>}
					</div>
					
					<div>
						<button type="submit" className="btn btn-sm btn-outline-secondary">Simpan</button>
					</div>
				</form>
			</div>

			<div className="row">
				<span>{pesan}</span>
			</div>

			<div className="row ps-2 pe-2">
				<table className="table">
					<thead>
						<tr>
							<th>No.</th>
							<th>Kategori</th>
							<th>Keterangan</th>
							<th colSpan="2"></th>
						</tr>
					</thead>
					<tbody>
						{
							kategori.map((item, index) => (
								<tr key={index}>
									<td>{nomor++}.</td>
									<td>{item.kategori}</td>
									<td>{item.keterangan}</td>
									<td>
										<button onClick={() => showData(item.idkategori)} className="btn btn-sm btn-outline-dark">Ubah</button>
									</td>
									<td>
										<button onClick={() => hapus(item.idkategori)} className="btn btn-sm btn-outline-dark">Hapus</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>			
		</>
	)
}

export default Kategori;