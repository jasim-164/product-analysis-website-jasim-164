import React, { useEffect, useState } from 'react';

const Home = () => {
    const[reviews,setreviews] =useState([]);
    useEffect(() =>{
        fetch('reviews.json')
        .then(response => response.json())
        .then(data =>setreviews(data))
    },[])

    return (
    
            reviews.map(review =>{
                <div id="review._id">${review.author}</div>
            })
       
    );
};

export default Home;