import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import PythonData from "./PythonData";

const Pythonc = () => {
  const [serviceData, setServiceData] = useState(PythonData);

  return (
    <>
      <Navbar />

      {/* Same-file CSS Styling */}
      <style>{`
        .course-section {
          background: #dfd9e6;
          padding: 70px 20px;
          color: rgb(120, 115, 115);
          font-family: 'Segoe UI', sans-serif;
        }

        .course-heading {
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 50px;
          color: rgb(169, 138, 182);
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          justify-content: center;
        }

        .course-card {
          background: rgb(255, 250, 250);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
          padding: 30px 20px;
          box-shadow: 0 0 25px rgba(176, 154, 175, 0.74);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          text-align: center;
          transform-style: preserve-3d;
        }

        .course-card:hover {
          transform: rotateY(10deg) scale(1.03);
          box-shadow: 0 0 30px rgb(0, 0, 0);
        }

        .course-icon {
          font-size: 3rem;
          color: rgb(0, 3, 3);
          margin-bottom: 15px;
        }

        .course-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: rgb(191, 141, 203);
        }

        .course-info {
          font-size: 1.5rem;
          color: rgb(0, 0, 0);
          margin-bottom: 20px;
        }

        .course-button {
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid rgb(7, 52, 46);
          color: rgb(0, 0, 0);
          border-radius: 25px;
          text-decoration: none;
          transition: 0.3s;
          font-weight: 600;
        }

        .course-button:hover {
          background: rgb(200, 172, 205);
          color: #0f172a;
        }

        @media (max-width: 500px) {
          .course-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="course-section">
        <h1 className="course-heading text-center fw-bold">Python Roadmap</h1>
        <div className="card-grid">
          {serviceData.map((curElem) => {
            const { id, logo, title, info, link } = curElem;
            return (
              <div className="course-card" key={id}>
                <div className="course-icon">
                  <i className={`fontawesome-style ${logo}`}></i>
                </div>
                <div className="course-title">{title}</div>
                <div className="course-info">{info}</div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-button"
                >
                  Explore
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pythonc;