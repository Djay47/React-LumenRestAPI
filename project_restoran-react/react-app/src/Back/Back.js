import React from 'react';
import { Redirect } from 'react-router-dom';

import Nav from './Nav.js';
import Side from './Side.js';
import Main from './Main.js';
import Footer from './Footer.js';

function Back() {

	// Cek: apakah item 'token' didalam penyimpanan session memiliki nilai (bukan string kosong/undefined/null)
	if ( !sessionStorage.getItem('token') )
	{
		return <Redirect to="/login" />	// Redirect ke halaman login, jika 'token' kosong
	}

	return (
		<>
			<div className="row my-2">
				<Nav/>
			</div>

			<div className="row">
				<div className="col-2 border-end border-secondary border-5">
					<Side/>
				</div>

				<div className="col-10">
					<Main/>
				</div>
			</div>	

			<div className="row border-top border-bottom border-dark border-5 my-2">
				<Footer/>
			</div>	
		</>
	)	
}

export default Back;