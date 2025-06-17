import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="display-2">
                Learning New Technology <br /> One Course Made it Easy
              </h1>
              <p className="main-hero-para">
              Find the right courses for you. Choose from many topics, skill levels, and languages. Watch thousands of high-quality on-demand online courses. Start learning today. Watch in-demand courses. Start learning today. Hone skills with practice. Learn on your schedule.
              </p>
             
              <div className="input-group mt-3">
              
              <a href="/Courses"><button className="btn-style btn-style-border" >Start Now </button></a>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
