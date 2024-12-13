import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const OTP = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = () => {
    alert('OTP Verified Successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-teal-400 to-blue-500">
      <div className="bg-white shadow-2xl rounded-lg px-8 py-6 w-full max-w-sm transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Enter OTP
        </h2>
        <input
          type="text"
          value={otp}
          onChange={handleChange}
          placeholder="Enter your OTP"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 mb-6"
        />
                  <Link
            to="/Signup"
            className="text-teal-500 hover:underline focus:outline-none focus:ring focus:ring-teal-300"
          >

        <button
          onClick={handleVerify}
          className="w-auto px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-md text-sm font-semibold hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-teal-300 shadow-md transform transition duration-300 hover:scale-105 mx-auto block"
        >
          Verify
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OTP;