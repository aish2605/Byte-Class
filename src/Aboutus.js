import React, { useEffect, useState } from "react";
import howToUseApp from "./API/howToUse.js";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    VanillaTilt.init(document.querySelectorAll(".tilt-img"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .about-section {
          background:  #dfd9e6;
          color: #fff;
          padding: 80px 20px;
          font-family: "Poppins", sans-serif;
        }

        .sub-title {
          color:rgb(0, 0, 0);
          font-weight: 600;
          font-size: 1rem;
        }

        .main-title {
          font-size: 2.8rem;
          font-weight: bold;
          margin-bottom: 30px;
          text-shadow: 1px 1px 2px #000;
        }

        .tilt-img {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          border-radius: 1rem;
          overflow: hidden;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .timeline-block {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px 20px;
          border-radius: 1rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .timeline-block:hover {
          transform: scale(1.03);
        }

        .timeline-id {
          font-size: 18px;
          font-weight: bold;
          color:rgb(0, 0, 0);
        }

        .timeline-content h4 {
          font-size: 15px;
          margin-bottom: 5px;
        }

        .timeline-content p {
          font-size: 15px;
          margin: 0;
          color: #e0f7fa;
        }

        .btn-animated {
          background: transparent;
          border: 2px solid rgb(0, 0, 0);
          padding: 10px 25px;
          font-size: 15px;
          color:black;
        
          border-radius: 30px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn-animated::before {
          content: "";
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background-color:rgb(133, 85, 147);
          transition: 0.4s;
          z-index: -1;
        }

        .btn-animated:hover {
          color: #000;
          border-color:rgb(184, 145, 195);
        }

        .btn-animated:hover::before {g
          left: 0;
        }
      `}</style>

      {/* HTML Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-12 col-lg-6 text-center" data-aos="fade-right">
              <div className="tilt-img">
                <img src="./images/back1.jpg" alt="about" className="img-fluid rounded-4 shadow-lg" />
              </div>
            </div>

            <div className="col-12 col-lg-6" data-aos="fade-left">
              <h3 className="sub-title">-- AVAILABLE @ As Web App</h3>
              <h1 className="main-title">How to use the App?</h1>

              <div className="timeline">
                {aboutData.map(({ id, title, info }) => (
                  <div className="timeline-block" key={id} data-aos="fade-up">
                    <div className="timeline-id">{id}</div>
                    <div className="timeline-content">
                      <h4>{title}</h4>
                      <p>{info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/Courses">
                <button className="btn-animated mt-4">Learn More</button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;