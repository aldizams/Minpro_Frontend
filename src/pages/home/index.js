import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { MagicSpinner } from 'react-spinners-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
	const [resultData, setResultData] = useState([]);
	const [loading, setLoading] = useState(false);
	const fetchApi = async () => {
		await setLoading(true);
		await axios.get('http://localhost:8000/products').then((response) => {
			console.log(response);
			setResultData(response.data);
		});
		await setLoading(false);
	};
	useEffect(() => {
		fetchApi();
	}, []);

	console.log(resultData);

	if (loading) {
		<MagicSpinner size={30} color="#686769" loading={loading} />;
	} else {
		return (
			<>
				<Container
					fluid="sm"
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						flexWrap: 'wrap',
						paddingTop: '25px',
					}}
				>
					{resultData.map((item) => (
						<>
							<Card
								style={{
									width: '18rem',
									border: 'border: 1px solid #000000;',
									borderRadius: '10px',
								}}
								key={item.id}
							>
								<Card.Img
									variant="top"
									src={item.image}
									style={{ borderRadius: '10px' }}
								/>
								<Card.Body>
									<Card.Title>{item.name.toUpperCase()}</Card.Title>
									<Link to={`/detail/${item.id}/${item.name}`}>
										<Button variant="primary">Detail</Button>
									</Link>
								</Card.Body>
							</Card>
						</>
					))}
				</Container>
			</>
		);
	}
}

export default Home;
