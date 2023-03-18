import { React, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { instance } from '../Axios/instance.js';
import useGet from '../Hook/useGet.js';
import useDelete from '../Hook/useDelete.js';

function Menu() {
	const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

	// Konfigurasi untuk data Kategori
	const [kategori, setKategori] = useState([]);

	useEffect(() => {
		async function fetchData()
		{
			const response = await instance.get('kategori');
			if (get) setKategori(response.data);
		}
		
		let get = true;
		
		fetchData();	// Get Data Kategori
		
		return () => get = false;
	}, [kategori]);

	// Get Data Menu
	const {data} = useGet('menu');
	const menu = data;

	// Terdapat function hapus untuk proses Delete Data
	const {hapus, pesan, setPesan} = useDelete('menu');

	const [idmenu, setIdMenu] = useState('');
	const [gambar, setGambar] = useState('');
	
	const [pilihan, setPilihan] = useState(true);
	
	// Menampilkan data yang akan diubah ke dalam form
	async function showData(id)
	{
		const response = await instance.get(`menu/${id}`);

		setValue('idkategori', response.data[0].idkategori);
		setValue('menu', response.data[0].menu);
		setValue('harga', response.data[0].harga);
		
		setIdMenu(response.data[0].idmenu);
		setGambar(response.data[0].gambar);

		setPilihan(false);
	}

	function simpan(data)
	{
		const formData = new FormData();
		formData.append('idkategori', data.idkategori);
		formData.append('menu', data.menu);
		formData.append('harga', data.harga);
		formData.append('gambar', data.gambar[0]);

		if (pilihan)
		{
			instance.post('menu', formData).then(response => setPesan(response.data.pesan));	// Insert Data
		}
		else
		{
			instance.post(`menu/${idmenu}`, formData).then(response => setPesan(response.data));	// Update Data
			setPilihan(true);
			setGambar('');
		}

		reset();
	}

	let nomor = 1;

	return (
		<div>
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Daftar Menu</h1>
			</div>

			<div className="row border-bottom border-secondary border-5 mb-2">
				<div className="col-6">
					<form onSubmit={handleSubmit(simpan)} className="mb-2">
						<div className="mb-2 row">
							<label htmlFor="idkategoriInput" className="col-sm-2 col-form-label">Kategori</label>
							<div className="col-sm-4">
								<select id="idkategoriInput" className="form-select" {...register('idkategori', {required: true})}>
									{
										kategori.map((item, index) => (<option key={index} value={item.idkategori}>{item.kategori}</option>))
									}
								</select>
							</div>
							{errors.kategori && <span><em>This field is required</em></span>}
						</div>

						<div className="mb-2 row">
							<label htmlFor="menuInput" className="col-sm-2 col-form-label">Menu</label>
							<div className="col-sm">
								<input type="text" className="form-control" id="menuInput" {...register('menu', {required: true})}/>
							</div>
							{errors.menu && <span><em>This field is required</em></span>}
						</div>

						<div className="mb-2 row">
							<label htmlFor="hargaInput" className="col-sm-2 col-form-label">Harga</label>
							<div className="col-sm">
								<input type="text" className="form-control" id="hargaInput" {...register('harga', {required: true})}/>
							</div>
							{errors.harga && <span><em>This field is required</em></span>}
						</div>
						
						<div className="mb-3 row">
							<label htmlFor="gambarInput" className="col-sm-2 col-form-label">Gambar</label>
							<div className="col-sm">
								<input type="file" className="form-control" id="gambarInput" {...register('gambar', {required: false})}/>
							</div>
							{errors.gambar && <span><em>This field is required</em></span>}
						</div>
						
						<div>
							<button type="submit" className="btn btn-sm btn-outline-secondary">Simpan</button>
						</div>
					</form>
				</div>
				
				<div className="col-3">
					<img src={gambar} alt={gambar} className="w-100"/>
				</div>
			</div>

			<div className="row">
				<span>{pesan}</span>
			</div>

			<div className="row ps-2 pe-2">
				<table className="table">
					<thead>
						<tr>
							<th>No.</th>
							<th>Gambar</th>
							<th>Menu</th>
							<th>Kategori</th>
							<th>Harga</th>
							<th colSpan="2"></th>
						</tr>
					</thead>
					<tbody>
						{
							menu.map((item, index) => (
								<tr key={index}>
									<td>{nomor++}.</td>
									<td><img src={item.gambar} alt={item.gambar}/></td>
									<td>{item.menu}</td>
									<td>{item.kategori}</td>
									<td>{item.harga}</td>
									<td>
										<button onClick={() => showData(item.idmenu)} className="btn btn-sm btn-outline-dark">Ubah</button>
									</td>
									<td>
										<button onClick={() => hapus(item.idmenu)} className="btn btn-sm btn-outline-dark">Hapus</button>
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

export default Menu;