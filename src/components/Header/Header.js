import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
        <nav className="navbar flex  mt-16  justify-evenly ">
        <div className="logo">
        <div className="contain mr-20 text-3xl"><Link to="/">BoiPora</Link></div>
        <hr></hr>
        </div>
        <div className="flex justify-center">

        <div className="contain mr-20 text-xl"><Link to="/">Home</Link></div>
        <div className="contain mr-20 text-xl"><Link to="/reviews">Review</Link></div>
        <div className="contain mr-20 text-xl"><Link to="/dashboard">Dashboard</Link></div>
        <div className="contain mr-20 text-xl"><Link to="/blog">Blog</Link></div>
        <div className="contain mr-20 text-xl"><Link to="/about">About</Link></div>

        </div>
        </nav>   
        </div>
    );
};


export default Header;