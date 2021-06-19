import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import HeaderNavbar from "../../Home/HeaderNavbar/HeaderNavbar";
import Modal from "react-modal";
Modal.setAppElement("body")
const customStyles = {
  content: {
    padding:"50px",
    top: '30%',
    left: '40%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Review = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const addReview = (review) => {
    fetch("https://infinite-shelf-48964.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(review),
    });
  };
  const handleReview = (data) => {
    const formData = new FormData();
    formData.set("key", "a4355e14fad8e03f37f160b394cd440a");
    formData.append("image", data.img[0]);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const reviewObj = {
          name: data.name,
          companyName: data.companyName,
          description: data.description,
          img: result.data.display_url,
        };
        addReview(reviewObj);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
    <HeaderNavbar/>
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7">
        <h2 className="mt-2 mb-3">Add a review</h2>
        <form
          className="border shadow pl-4 pt-4 pb-4"
          onSubmit={handleSubmit(handleReview)}
        >
          <input
            type="text"
            className="pl-2"
            placeholder="Your name"
            {...register("name", { required: true })}
            autoFocus
          />
          {errors.name && <span>This field is required</span>}
          <input
            type="text"
            placeholder="Company name"
            className="ml-4 pl-2"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && <span>This field is required</span>}

          <textarea
            className="d-block pl-2 mt-3 mb-3"
            placeholder="Write your review"
            name=""
            id=""
            cols="40"
            rows="4"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}

          <label className="d-block" htmlFor="">
            Upload your profile picture
          </label>
          <input
            type="file"
            className="d-block mb-3"
            {...register("img", { required: true })}
          />

          {errors.file && <span>This field is required</span>}

          <input
            className="bg-primary border-0 rounded p-2 text-white"
            type="submit"
          />
        </form>
        <button onClick={openModal}>Open Modal</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-success" ref={(_subtitle) => (subtitle = _subtitle)}>Thanks for your review</h2>
        <div className="d-flex justify-content-end mt-5">
          <button className="btn-success" onClick={closeModal}>OK</button>
       
        </div>
        
       
      </Modal>
      </div>
    </div>
    </>
  );
};

export default Review;
