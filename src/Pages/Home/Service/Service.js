import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, descriptionShort } = service;
    return (
        <div className="service">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="pt-3 title-des">{name}</h3>
            <p classname="des-short">{descriptionShort}</p>
            <Link to={`/Bookings/${_id}`}>
                <button className="btn btn-primary button-custom">Book Now</button>
            </Link>
        </div>
    );
};

export default Service;