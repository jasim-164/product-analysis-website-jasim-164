import React, { useEffect, useState } from 'react';
import showReview from '../../components/showReview/showReview'
const Home = () => {
    const[reviews,setreviews] =useState([]);
    useEffect(() =>{
        fetch('reviews.json')
        .then(response => response.json())
        .then(data =>setreviews(data))
    },[])

    return (
        <div>{ reviews.map(review =>{
            <showReview key={review._id} review={review}></showReview>
            
        })}</div>
    
       
    );
};

export default Home;