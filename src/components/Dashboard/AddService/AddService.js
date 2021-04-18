import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
const AddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const sendDataToDatabase = (data) => {
    fetch("https://infinite-shelf-48964.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleAddService = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.set("key", "a4355e14fad8e03f37f160b394cd440a");
    formData.append("image", data.img[0]);

    fetch(`https://api.imgbb.com/1/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const serviceObj = {
          email: loggedInUser.email,
          title: data.title,
          description: data.description,
          price: data.price,
          img: result.data.display_url,
        };
        sendDataToDatabase(serviceObj);

        console.log(data);
      });
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5 mt-2">
        <h2 className="mb-3 mt-1">Add a service</h2>
        <form
          className="border shadow pl-4 pt-4 pb-4"
          onSubmit={handleSubmit(handleAddService)}
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
      </div>
    </div>
  );
};

export default AddService;
