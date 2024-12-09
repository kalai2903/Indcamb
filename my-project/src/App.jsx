import React from 'react';
import RelaxGameContainer from './Components/Stress/Stress';
import Testimonial from './Components/Testimonial/Testimonial';
// import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
// import TakeAssessment from './Components/Test/Test';


const App = () => {  
    return (
        <main className="overflow-x-hidden bg-white text-dark">
            {/* <Navbar/> */}
            <Hero/>
            <Services/>
            {/* <RelaxGameContainer/> */}
            <Testimonial/>
            {/* <TakeAssessment/> */}

        </main>
    )
};

export default App
