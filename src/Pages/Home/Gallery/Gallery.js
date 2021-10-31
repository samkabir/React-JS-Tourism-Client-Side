import React from 'react';
import img1 from '../../../images/Gallary/1.jpg';
import img2 from '../../../images/Gallary/2.jpg';
import img3 from '../../../images/Gallary/3.jpg';
import img4 from '../../../images/Gallary/4.jpg';
import img5 from '../../../images/Gallary/5.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="container">
            <div className="line">
            </div>
            <h2 className="title-orange">Gallery</h2>
            <div className="line mb-5">
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <img src={img3} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img4} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-6">
                            <img src={img5} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;