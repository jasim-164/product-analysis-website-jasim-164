import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useReviews'
import "./Home.css"
import showReview from '../../components/showReview/showReview'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    // const[reviews,setreviews] =useState([]);
    // useEffect(() =>{
    //     fetch('reviews.json')
    //     .then(response => response.json())
    //     .then(data =>setreviews(data))
    // },[])
    //eivabe hoinai
    const[reviews, setReviews]=useProducts()

    const navigate=useNavigate();
 
    return (
  
        <div>

        <div className="flex justify-evenly items-center mt-24">
        <div className=" para  w-300 ">
        বিশ্বে দুইটি বেশ বড় সড় প্রােগ্রামিং প্রতিযােগিতা আছে। একটি হলাে ACM ICPC World finals ta ica international Olympiad for Informatics O. ACM প্রােগ্রামিং এ বিশ্ববিদ্যালয় পর্যায়ের ছেলেমেয়েরা অংশগ্রহণ করে থাকে। 

        বিভিন্ন রকমের টপিক থেকে প্রবলেম আসে: সংখ্যাত্ত্ব (Number Theory), ক্যালকুলাস (Calculus), গ্রাফ থিওরী (Graph Theory), গেইম থিওরী (Game Theory), ডায়নামিক প্রােগ্রামিং (Dynamic Programming), সম্ভাব্যতা (Probability) ইত্যাদি। 
        
        এখানে আসলে টপিকের সীমাবদ্ধতা নেই। এটি দলগত প্রতিযােগিতা। বিশ্বের প্রায় 100 টি দল বা বিশ্ববিদ্যালয় প্রতি বছর ACM ICPC World Finals এ অংশ গ্রহণ করে থাকে। এইসব দল নির্বাচন হয়ICPC এর মাধ্যমে যা প্রতি বছর বিশ্বের বিভিন্ন স্থানে হয়ে থাকে। 
        
        যেমন প্রতি বছর ঢাকাতে ICPC হয়ে থাকে এবং এতে যেই দল champion হয় তারা World finals এ যায়। অপর দিকে ইনফরমেটিক্স অলিম্পিয়াড এ স্কুল কলেজ লেভেলের ছেলেমেয়েরা অংশ নিয়ে থাকে। এটিতে একটি নির্দিষ্ট সিলেবাস থেকে প্রশ্ন হয়ে থাকে। 
        
        যেমন সিলেবাসে calculus নেই। এর মানে এই না যে প্রবলেমগুলি সহজ হয় বরং এসব প্রতিযােগিতার সমস্যাগুলি অনেক বেশি algorithmic হয়ে থাকে। এটি individual প্রতিযােগিতা। প্রতিটি দেশ হতে চারজনের একটি দল অংশ নিয়ে থাকে। 
        
        কনটেস্টের rank অনুসারে এখানে স্বর্ণ, রৌপ্য ও ব্রােঞ্জ পদক দেয়া হয়। তােমরা হয়তাে অনেকেই গণিত অলিম্পিয়াডের সাথে পরিচিত। গণিত অলিম্পিয়াডে যেমন গণিতের সমস্যা সমাধান করতে হয়, IOI তে তেমনি অ্যালগরিদমভিত্তিক সমস্যা সমাধান করতে হয়।</div>

        <div><img src="https://static-01.daraz.com.bd/p/mdc/113655ec9bf17888a58c182b8e43e020.jpg" height="600" width="500" alt="book">
        </img>
        <p>Programming Contest Data Structure and Algorithm by Md: Mahbubul Hassan</p>
        </div>
        </div>

       <div className="container">
       <h1>popular reviews</h1>

       <div className="grid grid-rows-1 grid-flow-col  gap-x-10 mt-10 ml-24 w-auto h-50">
           {reviews.slice(0,3).map((review) =>
            <div className="box-border h-300 w-300 p-4 border-4 ml-5 mr-5 bg-teal-300"> 
            <div key={review._id}> 
            <h1 className="text-4xl mb-5"> {review.author}</h1>
            <p className="mb-5">{review.text.slice(0,60)}</p>
            <h1 className="text-2xl">Rating: {review.rating}</h1>
            </div>
            </div>
           )}
        </div>
       <div>

       </div>
       </div>
       
       <button className="btn rounded-full bg-rose-300 px-7 py-3 mb-10 mt-10" onClick={()=>navigate('/reviews')}>See ALL</button>


        
        </div>
    
       
    );
};

export default Home;