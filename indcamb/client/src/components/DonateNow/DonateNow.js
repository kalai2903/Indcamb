import React from 'react';
import './DonateNow.css'; // External CSS file

const DonateNow = () => {
  return (
    <div className="container">
      <div className="title-section">
        {/* Highlight bar above the title */}
        <div className="highlight-bar"></div>
        <h1>
          <span className="support-title">SUPPORT</span> <br />
          <span className="last-chance">LAST CHANCE’S</span> <br />
          <span className="work-with">WORK WITH</span> <br />
          <span className="wildlife">WILDLIFE</span>
        </h1>
        <p className="paragraph">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font.
        </p>
      </div>

      <div className="support-options">
        <div className="option">
          <h3>In Person</h3>
          <p>
            500 Terry Francois Street SF <br /> CA 94158
          </p>
          <div className="logo">
            <p>LAST CHANCE</p>
          </div>
        </div>

        <div className="option">
          <h3>Over the Phone</h3>
          <p>
            I'm a paragraph. Click here to add your text and edit me. I'm a
            great place for you to tell a story and let your users know more
            about you.
          </p>
          <p>Tel. 123-456-7890</p>
        </div>

        <div className="option">
          <h3>Online</h3>
          <p>
            I'm a paragraph. Click here to add your text and edit me. I'm a
            great place for you to tell a story and let your users know more
            about you.
          </p>
          <button className="button">Click to Support</button>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
