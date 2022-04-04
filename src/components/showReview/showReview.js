import React from 'react';

const showReview = ({review}) => {
    const {author}=review
    console.log("jasim")
    return (
        <div>
        <h1>${author}</h1>
        </div>
    );
};

export default showReview;