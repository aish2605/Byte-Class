import React from "react";

const Footer = () => {
  return (
    <>
      <footer >
        <div className="container" >
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                

                
                <div className="col-6 col-lg-3">
                  <p><h2>Phone</h2>9322166695<br></br>9850208044  </p>
                
                </div>
                <div className="col-6 col-lg-3">
                  <p><h2>Support</h2>bytesupport@gmail.com <br></br>bytesupport@yahoo.com  </p>
                
                </div>
                

                <div className="col-6 col-lg-3">
                  {/* <h2>Follow Us</h2> */}
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href=""
                        target="_thapa">
                        <i class="fab fa-linkedin fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 ByteClass. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
