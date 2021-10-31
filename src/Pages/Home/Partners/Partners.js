import React from 'react';
import './Partners.css';

const Partners = () => {
    return (
        <div className="m-5">
            <div className="line">
            </div>
            <h2 className="title-orange">Our Service Qualities</h2>
            <div className="line mb-5">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-1">
                        <div className="logo">
                            <i className="fas fa-plane fs-1"></i>
                            <h5>Safest Travels</h5>
                        </div>
                    </div>
                    <div className="col-md-3 my-1">
                        <div className="logo">
                            <i className="far fa-star fs-1"></i>
                            <h5>Best Reviewed Tourism Company</h5>
                        </div>
                    </div>
                    <div className="col-md-3 my-1">
                        <div className="logo">
                            <i className="fas fa-campground fs-1"></i>
                            <h5>Camping</h5>
                        </div>
                    </div>
                    <div className="col-md-3 my-1">
                        <div className="logo">
                            <i className="fas fa-money-bill fs-1"></i>
                            <h5>Best Trip Money Can Buy</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;