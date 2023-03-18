import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Nav() {
	const history = useHistory();

	// Untuk logout
	function logout()
	{
		sessionStorage.clear();	// Menghapus Session yang tersimpan
		history.push('/login');	// Push (mengarahkan kembali) ke halaman login
	}

	return (
		<>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<Link to="/admin" className="text-decoration-none"><span className="navbar-brand">Dashboard</span></Link>
					<div className="d-flex flex-row-reverse">
						<button onClick={logout} className="btn btn-sm btn-outline-danger flex-end">Logout</button>
						<button className="btn btn-sm btn-outline-light me-3" disabled>{sessionStorage.getItem('email')}</button>
						<button className="btn btn-sm btn-outline-light text-capitalize me-3" disabled>{sessionStorage.getItem('posisi')}</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav;