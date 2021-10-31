import React from 'react';
import { Link } from 'react-router-dom';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect sticky="top" bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="title-orange fs-2">Evanto Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link className="text-black" as={Link} to="/home">Home</Nav.Link>
                            {user?.email ? <Nav.Link className="text-black" as={Link} to="/mybookings">My Bookings</Nav.Link> : ''}
                            {user?.email ? <Nav.Link className="text-black" as={Link} to="/managebookings">All Bookings</Nav.Link> : ''}
                            {user?.email ? <Nav.Link className="text-black" as={Link} to="/addnewtour">Add New Tour</Nav.Link> : ''}
                            {user?.email ? <Button onClick={logOut} className="text-black" variant="outline-dark"> {user?.displayName} Log Out <FontAwesomeIcon icon={faSignOutAlt} /></Button> :
                            <Nav.Link as={Link} to="/login">Login <FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>}
                        
                        </Nav>
                    </Navbar.Collapse>    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;