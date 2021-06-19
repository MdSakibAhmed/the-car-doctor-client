import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import HeaderNavbar from '../../Home/HeaderNavbar/HeaderNavbar';
const AddAdmin = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm()
    const handleAddAdmin = data => {
        console.log(data);


        fetch('https://infinite-shelf-48964.herokuapp.com/addAdmin',{
            method:"POST",
            headers:{"Content-type":'application/json'},
            body:JSON.stringify({email:data.email})

        }).then(res => res.json()).then(result => {
            console.log(result);

        })
    }
    
    return (
        <>
        <HeaderNavbar/>
        <div className='row '>
            <div className='col-md-2'>
            <Sidebar></Sidebar>

            </div>
            <div className='col-md-5 mt-3'>
            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit(handleAddAdmin)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input type='email' className='d-block w-100 mt-3 pl-2' placeholder='Enter Email' defaultValue="" {...register("email",{required:true})} />
      {errors.email && <span>This field is required</span>}

      <input className='btn-primary border-0 mt-4 p-1 pr-2 pl-2 rounded' type="submit" />
    </form>
            </div>
        </div>
        </>
    );
};

export default AddAdmin;