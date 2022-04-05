import React from 'react';

const Blog = () => {
    return (
        <div className="container mt-10">

            <div className="ml-32 mt-10">
            <h1 className="text-4xl">What is Context API?</h1>
            <p className="text-zinc-50 bg-slate-500 mt-10  ">The Context API can be used to share data with multiple components, without having to pass data through props manually. Passing data through props over and over can cause problems for your application.  If you’re passing data through props from the parent component to a fourth- or fifth-level component, you’re not reusing and writing maintainable code, and this might prejudice your application in the future.This is what we call “prop-drilling.” This can frustrate and slow down your development in the mid- to long-term.The Context API can be used to share data with multiple components, without having to pass data through props manually.
            To start with the Context API, the first thing we need to do is create a context using the createContext function from React.The createContext function accepts an initial value, but this initial value is not required.After creating your context, that context now has two React components that are going to be used: Provider and Consumer</p>
            </div>

            <div className="ml-32 mt-10">
            <h1 className="text-4xl">What is semantic Tags?</h1>
            <p className="text-zinc-50 bg-slate-500 mt-10  ">Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as <span className="text-2xl">header, footer and article</span> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.

            First, it is much easier to read. It has greater accessibility.</p>
            </div>

            <div className="ml-32 mt-10 mb-5" >
            <h1 className="text-4xl">What is the difference between block and inline block elements?</h1>
            <p className="text-zinc-50 bg-slate-500 mt-10  ">block The element will start on a new line and occupy the full width available. And you can set width and height values. inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values. Block elements <span className="text-xl">div, h1, p, li, section </span>Here are a few elements that have a default inline property: <span className="text-xl">span, a, img</span>
           </p>
            </div>
        </div>
    );
};

export default Blog;