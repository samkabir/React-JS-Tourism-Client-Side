import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/1.jpg';
import banner2 from '../../../images/Banner/2.jpg';
import banner3 from '../../../images/Banner/3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Travel and Adventure </h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Beauty of Discovery</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Fuel your own oasis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;