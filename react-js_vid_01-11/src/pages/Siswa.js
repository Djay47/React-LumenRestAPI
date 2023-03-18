import ListSiswa from './ListSiswa';

function Siswa()
{
	const nama = ['Jay', 'Roy', 'Key'];

	return (
		<div className="App">
			<h1>Daftar Siswa</h1>
			<ListSiswa siswa = {nama} />
		</div>
	);
}

export default Siswa;