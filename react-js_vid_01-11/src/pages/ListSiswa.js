function ListSiswa(props)
{
	const siswa = props.siswa.map( (item, i) =>
		<li key = {i}>{ item }</li>
	);

	return (
		<div className="App">
			<ul>
				{/*{props.siswa.map( (item, i) => <li key = {i}>{ item }</li>)}*/}
				{siswa}
			</ul>
			
		</div>
	);
}

export default ListSiswa;