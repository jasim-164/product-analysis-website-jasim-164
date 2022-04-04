import React from 'react';
import useProducts from '../../hooks/useReviews'
import './Reviews.css'
const Reviews = () => {
    const[reviews, setReviews]=useProducts()
    return (
        <div className="grid grid-rows-2 grid-flow-col gap-y-40 gap-x-10 mt-10 ">
           {reviews.map((review) =>
            <div className="box-border h-300 w-300 p-4 border-4 ml-5 mr-5 bg-teal-300"> 
            <div key={review._id}> 
            <h1 className="text-4xl mb-5"> {review.author}</h1>
            <p className="mb-5">{review.text.slice(0,60)}</p>
            <h1 className="text-2xl">Rating: {review.rating}</h1>
            </div>
            </div>
           )}
        </div>
    );
};

export default Reviews;