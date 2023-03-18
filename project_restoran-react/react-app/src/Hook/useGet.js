import { useState, useEffect } from 'react';
import { instance } from '../Axios/instance.js';

function useGet(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData()
		{
			const response = await instance.get(url);
			if (get) setData(response.data);
		}
		
		let get = true;
		fetchData();
		return () => get = false;
	}, [url, data]);

	return {data};
}

export default useGet;