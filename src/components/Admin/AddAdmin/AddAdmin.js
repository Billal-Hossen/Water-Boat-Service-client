import React,{useRef, useState} from 'react';
import { Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Deshboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const emailRef = useRef()
    const { register,handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const adminDta={
            email: data.email,
           
        }
        // console.log(adminDta)
        const url=`https://dry-ridge-60561.herokuapp.com/addAdmin`
        fetch(url,{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(adminDta)
        })
        .then(res=>console.log("server side response"))
    };
    return (
        <div>
            <Sidebar/>
           <div className="mb-5">
           <Card className="w-50 mx-auto">
           <Card.Body>
           <h2 className="text-center mb-4">Add Admin</h2>
           <Form   onSubmit={handleSubmit(onSubmit)}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" {...register("email",{required:true})} name="email" ref={emailRef}  required />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </Form.Group>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
           </Card.Body>

        </Card>
           </div>

        </div>
    );
};

export default AddAdmin;