import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';

const DetailProduct = () => {
	console.log(useParams());
	const { id } = useParams();
	const [product, setProduct] = React.useState({});

	const fetchApi = async () => {
		axios.get(`http://localhost:8000/products/${id}`).then((response) => {
			setProduct(response.data);
			console.log(response.data);
		});
	};
	useEffect(() => {
		fetchApi();
	}, []);
	const [loading, setLoading] = React.useState(false);
	const [refresh, setRefresh] = React.useState(false);

	return (
		<Container
			fluid="sm"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: '100px',
			}}
		>
			<>
				<image src={product.image} />
				<div>
					<h1>{product.name}</h1>
					<p>Price = {product.price}</p>
					<p>Quantity = {product.quantity}</p>
					<div>
						<Button variant="primary">Buy</Button>
					</div>
				</div>
			</>
		</Container>
	);
};

export default DetailProduct;
