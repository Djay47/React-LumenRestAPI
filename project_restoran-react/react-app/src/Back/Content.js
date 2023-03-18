import React from 'react'
import { useParams } from 'react-router-dom';

import Kategori from './Kategori.js';
import Menu from './Menu.js';
import Pelanggan from './Pelanggan.js';
import Pesanan from './Pesanan.js';
import DetailPesanan from './DetailPesanan.js';
import Administrator from './Administrator.js';

function Content() {
	const {isi} = useParams();

	let tampil;

	switch( isi )
	{
		case 'kategori':
			tampil = <Kategori/>;
			break;
		case 'menu':
			tampil = <Menu/>;
			break;
		case 'pelanggan':
			tampil = <Pelanggan/>;
			break;
		case 'pesanan':
			tampil = <Pesanan/>;
			break;
		case 'detail-pesanan':
			tampil = <DetailPesanan/>;
			break;
		case 'administrator':
			tampil = <Administrator/>;
			break;
		default:
			tampil = <Menu/>;
	}

	return (
		<>
			{tampil}
		</>
	)
}

export default Content;