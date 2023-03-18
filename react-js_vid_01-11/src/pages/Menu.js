import { useState } from 'react';
import Table from './Table';

function Menu()
{
	const title = 'Daftar Menu Restoran';
	
	const [menu, setMenu] = useState([
		{
			idmenu: 1,
			idkategori: 1,
			menu: 'Kopi',
			gambar: 'kopi.jpg',
			harga: 3000,
		},
		{
			idmenu: 2, 
			idkategori: 1,
			menu: 'Teh', 
			gambar: 'teh.jpg',
			harga: 3000
		},
		{
			idmenu: 3, 
			idkategori: 1, 
			menu: 'Jus Buah', 
			gambar: 'jus-buah.jpg', 
			harga: 5000
		},
		{
			idmenu: 4, 
			idkategori: 2, 
			menu: 'Bakwan', 
			gambar: 'bakwan.jpg', 
			harga: 10000
		},
		{
			idmenu: 5, 
			idkategori: 2, 
			menu: 'Martabak Telur', 
			gambar: 'martabak-telur.jpg', 
			harga: 15000
		},
		{
			idmenu: 6, 
			idkategori: 2, 
			menu: 'Tahu Isi', 
			gambar: 'tahu-isi.jpg', 
			harga: 5000
		},
	]);

	return (
		<div className="App">
			<Table menu={menu} title={title}/>
			<Table menu={menu.filter( item => (item.idkategori === 1 ))} title={'Minuman'}/>
			<Table menu={menu.filter( item => (item.idkategori === 2 ))} title={'Makanan Pembuka'}/>
		</div>
	);
}

export default Menu;