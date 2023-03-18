import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import useGet from '../Hook/useGet.js';
import Modal from 'react-modal';
import { instance } from '../Axios/instance.js';
// import axios from 'axios';

Modal.setAppElement('#root');

function Administrator() {
	// Konfigurasi Modal
	const [modalIsOpen, setIsOpen] = useState(false);

	const { register, handleSubmit, setValue, reset } = useForm();

	const {data} = useGet('administrator');
	const administrator = data;

	async function simpan(formValue)
	{
		const data = {
			user 		: formValue.nama,
			email 	: formValue.email,
			password: formValue.password,
			posisi 	: formValue.posisi,
			relasi 	: 'back'
		};

		await instance.post('register', data);
		// await axios.post('http://localhost:8000/api/register', data);

		resetModal()
		window.alert('Data berhasil ditambahkan');
	}

	async function switchStatus(id)
	{
		const dataSelected = administrator.filter( (item) => item.iduser === id );
		const switchStatus = (dataSelected[0].status === 1) ? 0 : 1;
		const data = { status: switchStatus };

		await instance.put(`administrator/${id}`, data);
	}

	function resetModal()
	{
		setIsOpen(false);
		// setValue('nama', '');
		// setValue('email', '');
		// setValue('password', '');
		// setValue('posisi', 'admin');
		reset();
	}

	let nomor = 1;

	return (
		<div>
			{/*Header*/}
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Administrator</h1>
			</div>

			{/*Button*/}
			<div className="row border-bottom border-secondary border-5 mb-2">
				<div className="col-2 mb-2">
					<button onClick={ () => setIsOpen(true) } className="btn btn-sm btn-outline-secondary">Tambah</button>
				</div>
			</div>

			{/*Table*/}
			<div className="row ps-2 pe-2">
				<table className="table">
					<thead>
						<tr>
							<th>No.</th>
							<th>Nama</th>
							<th>Email</th>
							<th>Posisi</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{
							administrator.map( (item, index) => (
								<tr key={index}>
									<td>{nomor++}</td>
									<td>{item.user}</td>
									<td>{item.email}</td>
									<td>{item.posisi}</td>
									<td>
										{
											(item.status === 1)
											?
												<button onClick={ () => switchStatus(item.iduser) } className="btn btn-sm btn-outline-success" title="Aktif">✔</button>
											:
												<button onClick={ () => switchStatus(item.iduser) } className="btn btn-sm btn-outline-danger" title="Tidak aktif">❌</button>
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
				onRequestClose = { () => {
					setIsOpen(false);
					resetModal();
				}}
				style = {
					{
						overlay: {},
						content: {
							top: '30%',
							left: '25%',
							right: '25%',
							bottom: '30%',
							padding: '10px 20px'
						}
					}
				}
			>
				<div className="row border-bottom border-3 border-secondary mb-3">
					<h4>Tambah Administrator</h4>
				</div>

				<div className="row">
					<form onSubmit={handleSubmit(simpan)} className="mb-2">
						<div className="mb-2 row">
							<label htmlFor="userNameInput" className="col-sm-2 col-form-label ps-0">Nama</label>
							<div className="col-sm">
								<input type="text" className="form-control" id="userNameInput" {...register('nama', {required: true})}/>
							</div>
						</div>

						<div className="mb-2 row">
							<label htmlFor="emailInput" className="col-sm-2 col-form-label ps-0">Email</label>
							<div className="col-sm">
								<input type="email" className="form-control" id="emailInput" {...register('email', {required: true})}/>
							</div>
						</div>

						<div className="mb-2 row">
							<label htmlFor="passwordInput" className="col-sm-2 col-form-label ps-0">Password</label>
							<div className="col-sm">
								<input type="password" className="form-control" id="passwordInput" {...register('password', {required: true})}/>
							</div>
						</div>
						
						<div className="mb-3 row">
							<label htmlFor="posisi" className="col-sm-2 col-form-label ps-0">Posisi</label>
							<div className="col-sm-3">
								<select id="posisi" className="form-select" {...register('posisi', {required: true})}>
									<option value="admin">Admin</option>
									<option value="koki">Koki</option>
									<option value="kasir">Kasir</option>
								</select>
							</div>
						</div>
						
						<button type="submit" className="btn btn-sm btn-secondary float-end">Simpan</button>
						<button onClick={resetModal} type="button" className="btn btn-sm btn-outline-secondary float-end me-3">Batal</button>
					</form>
				</div>
			</Modal>
		</div>
	)
}

export default Administrator;