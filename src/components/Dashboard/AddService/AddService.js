import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import HeaderNavbar from "../../Home/HeaderNavbar/HeaderNavbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";
const AddService = () => {

  const [successOrder,setSuccessOrder] = useState(false)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const sendDataToDatabase = data => {
    fetch("https://infinite-shelf-48964.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSuccessOrder(true)
        reset()
        })
        
      
      
  };

  const handleAddService = data => {
    console.log(data);
    const formData = new FormData();
    formData.set("key", "a4355e14fad8e03f37f160b394cd440a");
    formData.append("image", data.img[0]);

    fetch(`https://api.imgbb.com/1/upload`, {
      method: "POST",
      body: formData,
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        const serviceObj = {
          email: loggedInUser.email,
          title: data.title,
          description: data.description,
          price: data.price,
          img: result.data.display_url,
        }
        sendDataToDatabase(serviceObj);
       
        console.log(data);
      })
  }

  return (
    <>
    <HeaderNavbar/>
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
{successOrder && <div style={{height:"100px"}} className=' col-md-5  bg-success text-white text-center'>

<h4 className='mt-3 mb-2'>Product Added Successfully</h4>
<button onClick={()=> setSuccessOrder(false)} className='btn-primary  p-1 rounded border-0 shadow'>  <FontAwesomeIcon icon={faPlusSquare} /> Add another service</button>

</div>}
      
      {!successOrder &&  <div className="col-md-5 mt-2">
        <h2 className="mb-3 mt-1">Add a service</h2>
       
        <form
          className="border shadow pl-4 pt-4 pb-4"
          onSubmit={ handleSubmit(handleAddService) }
        >
          <input
            className="pl-2"
            type="text"
            placeholder="Enter Service Title"
            defaultValue=""
          
            {...register("title", { required: true })}
          />

          <input
            className="d-inline-block pl-2 ml-4"
            placeholder="Service Charge Amount"
            type="number"
         
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}

          <textarea
            placeholder="Enter Description"
            className="d-block mt-4 mr-3 pl-2"
            name="description"
            id=""
            cols="50"
            rows="4"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}
          <label className="d-block mt-4" htmlFor="">
            Upload Image
          </label>
          <input
            className="d-block mb-4"
            type="file"
            {...register("img", { required: true })}
          />
          {errors.img && <span>This field is required</span>}

          <input
          
            className="bg-primary border-0 rounded p-2 text-white"
            type="submit"
          />
        </form> 
      </div> }
     
    </div>
    </>
  );
};

export default AddService;
