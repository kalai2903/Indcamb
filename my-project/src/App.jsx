import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Home from './Components/Home';
import Signup from './Components/Signup/Signup';
// import OTP from './Components/Otp/OTP';
import OTP from './Components/OTP/OTP';

// import Signup from './Signup';
// import OTP from './OTP';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Signup Page */}
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/OTP" element={<OTP />} />


        {/* Route for OTP Page */}
        {/* <Route path="/otp" element={<OTP/>} /> */}
      </Routes>
    </Router>
    // <>
    // <Hero/>
    // <Services/>
    // <Testimonial/>
    // </>
  );
};

export default App;