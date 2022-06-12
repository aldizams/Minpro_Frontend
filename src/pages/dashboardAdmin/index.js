import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Button,
	Container,
	Table,
} from 'react-bootstrap';

const Dashboard = () => {
	const [resultData, setResultData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [addProduct, setAddProduct] = useState({
		name: '',
		price: '',
		quantity: '',
		image: '',
	});
	const [showForm, setShowForm] = useState(false);
	const [refresh, setRefresh] = useState(false);

	const fetchApi = async () => {
		var config = {
			method: 'get',
			url: 'http://localhost:8000/products',
		};

		await axios(config).then((response) => {
			setResultData(response.data);
		});
	};

	useEffect(() => {
		fetchApi();
		setRefresh(false);
	}, [refresh]);

	const submitAddProduct = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8000/products', addProduct, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		});
		setShowForm(false);
		setRefresh(true);
	};

	const Form = () => {
		return (
			<Container fluid="sm">
				<Form className="mb-3" onSubmit={submitAddProduct}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter product name"
							onChange={(e) =>
								setAddProduct({
									...addProduct,
									name: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Price</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter product price"
							onChange={(e) =>
								setAddProduct({
									...addProduct,
									price: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Quantity</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter product quantity"
							onChange={(e) =>
								setAddProduct({
									...addProduct,
									quantity: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Image</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter product image"
							onChange={(e) =>
								setAddProduct({
									...addProduct,
									image: e.target.value,
								})
							}
						/>
					</Form.Group>
					<Button
						variant="primary"
						type="button"
						onClick={() => setShowForm(false)}
					>
						Cancel
					</Button>
					<Button variant="primary" type="submit" className="mx-2">
						Submit
					</Button>
				</Form>
			</Container>
		);
	};
	return (
		<Container className="my-5">
			{showForm ? (
				Form()
			) : (
				<div className="text-end mb-3">
					<Button
						variant="primary"
						type="button"
						onClick={() => setShowForm(true)}
					>
						Add Product
					</Button>
				</div>
			)}
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Image</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{resultData.map((item) => (
						<tr>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>
							<td>
								<Button variant="warning" type="button">
									Edit
								</Button>
								<Button variant="danger" type="button" className="mx-2">
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};
export default Dashboard;
