import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="custom-container">
        <div className="header-left">
          <h1 className="header-title">
            Learn New Technology <br /> Easily with Byte Class
          </h1>
          <p className="header-description">
            Choose from thousands of expert-led courses across hundreds of topics. Learn on your own time, at your own pace — anytime, anywhere.
          </p>
          <a href="/Courses">
            <button className="glassy-button">Start Learning</button>
          </a>
        </div>

        <div className="header-right">
          <div className="header-img-wrapper">
            <img src="./images/h1.jpg" alt="hero" className="main-img" />
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
