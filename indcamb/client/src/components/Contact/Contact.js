import React from 'react';
import './Contact.css';
import facebookIcon from '../Assets/facebook.png';
import twitterIcon from '../Assets/twitter.png';
import instagramIcon from '../Assets/instagram.png';
import youtubeIcon from '../Assets/youtube.png';

function Contact() {
  return (
    <div className="container">
      <section className="contact-section">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>
            SRDS continue to uplift the poor and marginalized by enabling
            them to lead quality life in the last 30 years of service.....
          </p>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Phone</label>
            <input type="tel" />
            <div className="submit-text">
              SUBMIT
            </div>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-horizontal">
            <div>
              <h3>ADDRESS</h3>
              <p>3/1 M G Road<br />Arakandanallur post<br />Kandachipuram Taluk, Villupuram<br />District, Tamil Nadu, India 605757<br />India</p>
            </div>
            <div>
              <h3>PHONE</h3>
              <p>+91-9976676226</p>
            </div>
            <div>
              <h3>EMAIL</h3>
              <p><a href="mailto:radhasrds@gmail.com">radhasrds@gmail.com</a></p>
            </div>
          </div>
          <div className="social-media">
            <div className="social-icon">
              <img src={facebookIcon} alt="Facebook" />
              <p>Facebook</p>
            </div>
            <div className="social-icon">
              <img src={twitterIcon} alt="Twitter" />
              <p>Twitter</p>
            </div>
            <div className="social-icon">
              <img src={instagramIcon} alt="Instagram" />
              <p>Instagram</p>
            </div>
            <div className="social-icon">
              <img src={youtubeIcon} alt="YouTube" />
              <p>YouTube</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        © 2035 by Last Chance. Powered and secured by <a href="#">InnovationNest</a> | <a href="#">Back to Top</a>
      </footer>
    </div>
  );
}

export default Contact;
