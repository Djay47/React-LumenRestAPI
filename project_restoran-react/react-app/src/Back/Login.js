import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { instance } from '../Axios/instance.js';
import { useHistory } from 'react-router-dom';

function Login() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const history = useHistory();

	const [pesan, setPesan] = useState('');

	async function login(data)
	{
		const response = await instance.post('login', data);

		if ( response.data.token )
		{
			sessionStorage.setItem('token', response.data.token);
			sessionStorage.setItem('email', response.data.user.email);
			sessionStorage.setItem('posisi', response.data.user.posisi);

			reset();

			history.push('/admin', );
			window.location.reload();
		}
		else
		{
			setPesan(response.data.pesan);
		}
	}

	return (
		<div>
			<div className="row border-bottom border-secondary border-5 mb-2">
				<h1>Login</h1>
			</div>
			
			<div className="row border-bottom border-secondary border-5 mb-2">
				<div className="col-4 my-3 mx-auto">
					<span className="text-danger"><em>{pesan}</em></span>
					<form onSubmit={handleSubmit(login)} className="mb-2">
						<div className="row mb-2">
							<label htmlFor="emailInput" className="form-label ps-0">Email</label>
							<input type="email" className="form-control" id="emailInput" placeholder="Email yang Anda gunakan" {...register('email', {required: true})}/>
							{errors.email && <span className="text-danger"><em>This field is required</em></span>}
						</div>
						
						<div className="row mb-3">
							<label htmlFor="passwordInput" className="form-label ps-0">Password</label>
							<input type="password" className="form-control" id="passwordInput" placeholder="Password yang anda gunakan" {...register('password', {required: true})}/>
							{errors.password && <span className="text-danger"><em>This field is required</em></span>}
						</div>
						
						<div className="row">
							<button type="submit" className="btn btn-sm btn-primary col-2 mx-auto">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;