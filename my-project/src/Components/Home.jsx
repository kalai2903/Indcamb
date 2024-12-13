import React from 'react'
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
// import Navbar from './Navbar/Navbar';

function Home() {
    return (
        <>
            {/* <Navbar/> */}
            <Hero/>
            <Services/>
            <Testimonial/>
        </>
    )
}

export default Home
