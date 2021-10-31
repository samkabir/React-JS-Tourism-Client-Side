import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewTourPlan.css';

const AddNewTourPlan = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/tourPlans', data)
        .then( res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className="tour-plan">
            <h2>Add a Tour Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" />
                <textarea {...register("descriptionShort")} placeholder="Short Description" />
                <textarea {...register("descriptionBig")} placeholder="Detailed Description" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input className="btn btn-primary button-custom" type="submit"></input>
            </form>
        </div>
    );
};

export default AddNewTourPlan;