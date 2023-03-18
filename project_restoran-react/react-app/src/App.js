import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Back/Login.js';
import Back from './Back/Back.js';
import Front from './Front/Front.js';

function App() {
  return (
	  <div className="container-fluid">
  		<Router>
    		<Route path = '/' component = { Front } exact />
    		<Route path = '/home' component = { Front } />
    		<Route path = '/admin' component = { Back } />
        <Route path = '/login' component = { Login } />
	  	</Router>
	  </div>
  );
}

export default App;