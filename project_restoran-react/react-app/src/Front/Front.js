import React from 'react';

import Nav from './Nav.js';
import Side from './Side.js';
import Main from './Main.js';
import Footer from './Footer.js';

function Front() {
	return (
		<>
			<div className="row border-top border-bottom border-dark border-5 my-2">
				<div>
					<Nav/>
				</div>
			</div>
			
			<div className="row">
				<div className="col-2 border-end border-secondary border-5">
					<Side/>
				</div>
				
				<div className="col-10">
					<Main/>
				</div>
			</div>
			
			<div className="row border-top border-bottom border-dark border-5 my-2">
				<div>
          <Footer/>
        </div>
			</div>
		</>
	)
}

export default Front;