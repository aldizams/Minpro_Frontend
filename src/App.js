import { Home, Dashboard, DetailProduct, Login, Register } from './pages';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/detail/:id/:name" element={<DetailProduct />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
