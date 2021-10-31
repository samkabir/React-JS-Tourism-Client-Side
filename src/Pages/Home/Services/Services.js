import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('https://haunted-treat-31834.herokuapp.com/tourPlans')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="services" className="container my-5 pt-3">
            <div className="line">
            </div>
            <h2 className="title-orange">Tour Packages</h2>
            <div className="line mb-5">
            </div>
            <div className="service-container pt-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;