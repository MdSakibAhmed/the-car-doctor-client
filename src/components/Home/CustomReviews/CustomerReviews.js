import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const CustomerReviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=> {
        fetch('https://infinite-shelf-48964.herokuapp.com/reviews').then(res => res.json()).then(data => setReviews(data))
    },[])
   
    return (
        <div>
        <h1 style={{marginBottom:"100px"}} className="text-center mt-5">What Our Customer Says</h1>
<div className="row justify-content-center">
            {reviews.map(review => <CustomerReview key={review._id} review={review}></CustomerReview>)}
        </div>
        </div>
        
    );
};

export default CustomerReviews;