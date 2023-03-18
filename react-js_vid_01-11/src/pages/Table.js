function Table(props)
{
	return (
		<div className="App">
			<h1>{props.title}</h1>
			
			<table className="table-bordered" cellPadding="10" >
				<thead>
					<tr>
						<th>Menu</th>
						<th>Harga</th>
					</tr>
				</thead>
				
				<tbody>
					{props.menu.map( (item) => {
						return (
							<tr key={item.idmenu}>
								<td>{item.menu}</td>
								<td>{item.harga}</td>
							</tr>
						);
					})}
				</tbody>	
			</table>
		</div>
	);
}

export default Table;