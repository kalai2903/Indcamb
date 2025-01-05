import React from 'react'
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import About from './About/About';
import Testimonial from '../Components/Testimonial/Testimonial';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';


function Home() {
    return (
        <>
        {/* <TestPage/> */}
        {/* <Navbars/> */}
            <Navbar/>
            <Hero/>
            <Services/>
            <About/>
            <Testimonial/>
            <Footer/>
        </>
    )
}

export default Home;