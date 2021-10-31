import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Bookings.css';

    //Displaying the Tour Plans
    const Bookings = () => {
        const [plan, setPlan] = useState({});
        const {serviceId} = useParams();
        useEffect( () =>{
            fetch(`http://localhost:5000/tourPlans/${serviceId}`)
            .then(res => res.json())
            .then(data => setPlan(data))
        }, [])

    //Taking user Information
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const name= user.displayName;
    const email= user.email;

    const onSubmit = data => {
        data.status="Pending";
        console.log(data);
        fetch('http://localhost:5000/toursBooked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then( res => {
            if(res.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="container detail">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid detail-img" src={plan?.img} alt="" />
                            </div>
                            <div className="col-md-6 text-section">
                                <h4>{plan?.name}</h4>
                                <p><i class="fas fa-info-circle fs-4 logo-booking px-2"></i>{plan?.descriptionBig} </p>
                                <p><i class="far fa-clock fs-4 logo-booking px-2"></i>{plan?.descriptionShort} </p>
                                <br />
                                <h4><i className="fas fa-tag logo-booking px-2"></i> Price: {plan?.price} tk</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Please provide booking information</h2>
                    <form className="form-booking" onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={name} {...register("name")} />
                        <input defaultValue={email} {...register("email")} />
                        
                        {plan?.name && 
                        <input defaultValue={plan.name} {...register("tourName")} />} 
                        {errors.tourName && <span className="error">This field is required</span>}
                        
                        {plan?.name &&
                        <input defaultValue={plan.price} {...register("price")} />}
                        {errors.price && <span className="error">This field is required</span>}
                        
                        <textarea placeholder="Address" defaultValue="" {...register("address")} />
                        <input type="number" placeholder="Phone" defaultValue="" {...register("phone")} />
                        {/* <input defaultValue="Pending" {...register("status")} disabled /> */}
                        <input className="btn btn-primary button-custom" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookings;