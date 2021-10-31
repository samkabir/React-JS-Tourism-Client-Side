import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBookings.css'

const MyBookings = () => {
    const {user} = useAuth();
    const userEmail = [user.email];
    console.log(userEmail);

    const [bookings, setBookings] = useState([])
    useEffect( () => {
        fetch('https://haunted-treat-31834.herokuapp.com/toursBooked/byEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userEmail)
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        if(window.confirm('Are you sure?')){
            const url = `https://haunted-treat-31834.herokuapp.com/toursBooked/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount){
                    alert('Data Deleted!')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-2 p-3">
                        <h5>Name</h5>
                    </div>            
                    <div className="col-md-2 p-3">
                        <h5>Email</h5>
                    </div>            
                    <div className="col-md-2 p-3">
                        <h5>TourPlan</h5>
                    </div>            
                    <div className="col-md-1 p-3">
                        <h5>Price</h5>
                    </div>            
                    <div className="col-md-2 p-3">
                        <h5>Address</h5>
                    </div>            
                    <div className="col-md-2 p-3">
                        <h5>Phone</h5>
                    </div>
                </div>
                {
                    bookings.map(booking => <div key={booking._id}>
                        <div className="row mybookingrow">
                            <div className="col-md-2 p-3">
                                <p>{booking.name}</p>
                            </div>            
                            <div className="col-md-2 p-3">
                                <p>{booking.email}</p>
                            </div>            
                            <div className="col-md-2 p-3">
                                <p>{booking.tourName}</p>
                            </div>            
                            <div className="col-md-1 p-3">
                                <p>{booking.price}</p>
                            </div>            
                            <div className="col-md-2 p-3">
                                <p>{booking.address}</p>
                            </div>            
                            <div className="col-md-2 p-3">
                                <p>{booking.phone}</p>
                            </div>
                            <div className="col-md-1 p-3">
                                <button className="button-custom" onClick={() => handleDelete(booking._id)}>Delete</button>
                            </div> 
                        </div>
                    </div>             
                        )
                }
                
            </div>
        </div>
    );
};

export default MyBookings;