import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
	const [formInputLogin, setFormInputLogin] = useState({
		name: '',
		password: '',
	});

	const submitLogin = () => {
		axios
			.post('http://localhost:8000/auth/login', {
				name: formInputLogin.name,
				password: formInputLogin.password,
			})
			.then((response) =>
				localStorage.setItem('token', response.data.access_token)
			);

		console.log(localStorage.getItem('token'));
	};

	const onChangeName = (event) => {
		setFormInputLogin({ ...formInputLogin, name: event.target.value });
	};

	const onChangePassword = (event) => {
		setFormInputLogin({ ...formInputLogin, password: event.target.value });
	};

	return (
		<div
			style={{
				marginTop: '15%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card
				style={{
					width: '18rem',
					borderRadius: '25px',
					boxShadow: '14px 17px 45px -2px rgba(156,151,151,0.89)',
				}}
			>
				<Card.Body>
					<Form>
						<h1 className="styleHeader">Login</h1>
						<Form.Label htmlFor="name">Name</Form.Label>
						<Form.Control
							type="text"
							id="name"
							value={formInputLogin.name}
							onChange={(event) => onChangeName(event)}
						/>
						<Form.Label htmlFor="password">Password</Form.Label>
						<Form.Control
							type="password"
							id="password"
							value={formInputLogin.password}
							onChange={(event) => onChangePassword(event)}
						/>
						<Button variant="primary" type="submit" onClick={submitLogin}>
							Login
						</Button>
					</Form>
				</Card.Body>{' '}
			</Card>
		</div>
	);
};

export default Login;
