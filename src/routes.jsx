
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './containers/Home'
import Order from './containers/Order'

function AppRoutes(){

	return(
		
			<Router>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/order' element={<Order/>}/>
				</Routes>
			</Router>
	)

}

export default AppRoutes