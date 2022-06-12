import React from 'react';
import {
	Navbar,
	Container,
	Nav,
	Form,
	NavDropdown,
	FormControl,
	Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar
			bg="light"
			expand="lg"
			style={{ boxShadow: '1px 5px 55px 19px rgba(0,0,0,0.32)' }}
		>
			<Container fluid>
				<Navbar.Brand as={Link} to="/">
					OnStore
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/dashboard">
							Dashboard
						</Nav.Link>
						<NavDropdown id="navbarScrollingDropdown">
							<NavDropdown.Item as={Link} to="/login">
								Login
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/register">
								Register
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
