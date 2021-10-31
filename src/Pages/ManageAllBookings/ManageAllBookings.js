import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css'

const ManageAllBookings = () => {

    const [bookings, setBookings] = useState([])
    const [approved, setApproved] = useState(false);
    useEffect( () => {
        fetch('https://haunted-treat-31834.herokuapp.com/toursBooked')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [approved])

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

    const handleStatus = id => {
        const url = `https://haunted-treat-31834.herokuapp.com/toursBooked/${id}`;
        fetch(url, {
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Order Approved!');
                setApproved(true);
            }
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-1 p-2">
                        <h5>Name</h5>
                    </div>            
                    <div className="col-md-2 p-2">
                        <h5>Email</h5>
                    </div>            
                    <div className="col-md-2 p-2">
                        <h5>TourPlan</h5>
                    </div>            
                    <div className="col-md-1 p-2">
                        <h5>Price</h5>
                    </div>            
                    <div className="col-md-2 p-2">
                        <h5>Address</h5>
                    </div>            
                    <div className="col-md-1 p-2">
                        <h5>Phone</h5>
                    </div>
                    <div className="col-md-1 p-2">
                        
                    </div>
                    <div className="col-md-1 p-2">
                        
                    </div>
                    <div className="col-md-1 p-2">
                        <h5>Status</h5>
                    </div>
                </div>
                {
                    bookings.map(booking => <div key={booking._id}>
                        <div className="row mybookingrow px-3">
                            <div className="col-md-1 my-2">
                                <p>{booking.name}</p>
                            </div>            
                            <div className="col-md-2 p-2">
                                <p>{booking.email}</p>
                            </div>            
                            <div className="col-md-2 my-2">
                                <p>{booking.tourName}</p>
                            </div>            
                            <div className="col-md-1 my-2">
                                <p>{booking.price}</p>
                            </div>            
                            <div className="col-md-2 my-2">
                                <p>{booking.address}</p>
                            </div>            
                            <div className="col-md-1 my-2">
                                <p>{booking.phone}</p>
                            </div>
                            <div className="col-md-1 my-2">
                                
                            </div>
                            <div className="col-md-1 p-3">
                                <button className="btn btn-danger" onClick={() => handleDelete(booking._id)}>Delete</button>
                            </div> 
                            <div className="col-md-1 p-3">
                                <button className="btn btn-success" onClick={() => handleStatus(booking._id)}>{booking.status}</button>
                            </div> 
                        </div>         
                    </div>
                        )
                }
                
            </div>
        </div>
    );
};

export default ManageAllBookings;