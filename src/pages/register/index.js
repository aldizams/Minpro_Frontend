import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Register = () => {
	return (
		<div
			style={{
				marginTop: '8%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card
				style={{
					width: '25rem',
					borderRadius: '25px',
					boxShadow: '14px 17px 45px -2px rgba(156,151,151,0.89)',
				}}
			>
				<Card.Body>
					<Card.Title>Login</Card.Title>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control type="text" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Address</Form.Label>
							<Form.Control type="text" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control type="number" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="primary" type="submit">
							Register
						</Button>
					</Form>
				</Card.Body>{' '}
			</Card>
		</div>
	);
};

export default Register;
