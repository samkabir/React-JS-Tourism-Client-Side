import React from 'react';
import {  Container, Navbar, } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <div className="col-md-6 text-white d-flex pt-5">
                        <h5><i className="fas fa-map-marked-alt"></i>Address</h5>
                        <p>159/2A, Road#15, Gulshan 2, Dhaka, Bangladesh</p>
                        <p id="phn">Mobile: +880136542161</p>
                        <br />
                    </div>
                    <div className="col-md-6 text-white">
                        <i className="fab fa-facebook-square fa-2x p-3"></i> 
                        <i className="fab fa-twitter-square fa-2x p-3"></i> 
                        <i className="fab fa-github fa-2x p-3"></i> 
                        <i className="fab fa-google fa-2x p-3"></i> 
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;