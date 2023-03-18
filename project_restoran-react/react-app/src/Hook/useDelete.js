import { useState } from 'react';
import { instance } from '../Axios/instance.js';

function useDelete(url) {
	const [pesan, setPesan] = useState('');
	
	async function hapus(id)
	{	
		if ( window.confirm('Data akan dihapus') )
		{
			const response = await instance.delete(url + '/' + id);
			setPesan(response.data);
		}	
	}

	return {hapus, pesan, setPesan};
}

export default useDelete;