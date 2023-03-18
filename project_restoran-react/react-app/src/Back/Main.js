import React from 'react';
import {
	Route,
	Switch,
	useRouteMatch,
} from 'react-router-dom';

import Content from './Content.js';

function Main() {
	const {path} = useRouteMatch();

	return (
		<>
			<Switch>
				<Route path = {`${path}/:isi`}>
					<Content/>
				</Route>
			</Switch>
		</>
	)
}

export default Main;