import React from 'react';
import web from "../src/img/img1.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
            name="Grow Your Business With " 
            imgsrc={web} 
            visit="/blog" 
            btnname="Get Started"/>
        </>
    )
}

export default Home;
