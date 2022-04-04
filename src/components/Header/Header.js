import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
        <nav className="navbar">
        <div className="flex justify-center mt-7">

        <div className="contain mr-20"><Link to="/">Home</Link></div>
        <div className="contain mr-20"><Link to="/reviews">Review</Link></div>
        <div className="contain mr-20"><Link to="/dashboard">Dashboard</Link></div>
        <div className="contain mr-20"><Link to="/blog">Blog</Link></div>
        <div className="contain mr-20"><Link to="/about">About</Link></div>

        </div>
        </nav>   
        </div>
    );
};


export default Header;