import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Side() {
	const {url} = useRouteMatch();

	return (
		<>
			<div className="card">
				<div className="card-header">Manu Aplikasi</div>
					<ul className="list-group list-group-flush">
						{
							(sessionStorage.getItem('posisi') === 'admin') ?
							(
								<Link to={`${url}/kategori`}>
									<li className="list-group-item">Kategori</li>
								</Link>
							) 
								:
							(
								''
							)
						}

						{
							(sessionStorage.getItem('posisi') === 'admin') ?
							(
								<Link to={`${url}/menu`}>
									<li className="list-group-item">Menu</li>
								</Link>
							)
								:
							(
								''
							)
						}

						{
							(sessionStorage.getItem('posisi') === 'admin') ?
							(
								<Link to={`${url}/pelanggan`}>
									<li className="list-group-item">Pelanggan</li>
								</Link>
							)
								:
							(
								''
							)
						}

						{
							((sessionStorage.getItem('posisi') === 'admin') || (sessionStorage.getItem('posisi') === 'kasir')) ?
							(
								<Link to={`${url}/pesanan`}>
									<li className="list-group-item">Pesanan</li>
								</Link>	
							)
								:
							(
								''
							)
						}

						<Link to={`${url}/detail-pesanan`}>
							<li className="list-group-item">Detail Pesanan</li>
						</Link>

						{
							(sessionStorage.getItem('posisi') === 'admin') ?
							(
								<Link to={`${url}/administrator`}>
									<li className="list-group-item">Administrator</li>
								</Link>
							)
								:
							(
								''
							)
						}

					</ul>
			</div>
		</>
	)
}

export default Side;