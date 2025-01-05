import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signin from './Components/Signin/Signin';
// import Hero from './Components/Hero';

import Home from './Components/Home';
import TestPage from './Components/Testpage/TestPage';
import ContactUs from './Components/ContactUs/ContactUs';
// import TestPage from './Components/Testpage';
// import Signup from './Components/Signup/Signup';
// import OTP from './Components/OTP/OTP';



const App = () => {
  return (
    <Router>
      <Routes>
        
        {/* <Route path="/" element={<Signin />} /> */}
        {/* <Route path="/" element={<Signup />} />/ */}
        {/* <Route path="/OTP" element={<OTP />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/TestPage" element={<TestPage/>}/>
        <Route path="/ContactUs" element={<ContactUs />} />
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

