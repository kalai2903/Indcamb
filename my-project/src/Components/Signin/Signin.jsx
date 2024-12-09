import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className="login-container">
            <h2 className="form-title">
            Log in with
            </h2>
            <div className="social-login">
            <button className="social-button">
            <img src="google.png" alt="Google" className="social-icon" /> Google
            </button>
            <button className="social-button">
            <img src="apple.png" alt="Apple" className="social-icon" /> Apple
            </button>
            </div>
            <p className="separator"><span>or</span></p>
            <form action="#" className="login-form">
            <div className="input-wrapper">
            <input type="email" placeholder="Email address" 
            className="input-field" required/>
            <i class="material-symbols-outlined">mail</i>
            <input type="password" placeholder="Password" 
            className="input-field" required/>
            <i class="material-symbols-outlined">lock</i>

            </div>
            <a href="#" className="forgot-pass-link"></a>
            </form>
            </div>
        </div>
    )
}

export default Signin
