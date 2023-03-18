import { useState } from 'react';

function Tentang()
{
	const [count, setCount] = useState(0);

	function tambah()
	{
		setCount(count + 1);
	}

	function kurang()
	{
		if (count > 0) setCount(count - 1);
	}

	return (
		<div className="App">
			<h1>Tentang Djay Store</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
			<p>{count}</p>
			<button type="button" onClick={tambah} className="btn btn-primary">Tambah</button>
			<button type="button" onClick={kurang} className="btn btn-danger">Kurang</button>
		</div>
  	);
}

export default Tentang;