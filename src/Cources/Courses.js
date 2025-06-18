import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";

const CoursesData = [
  {
    id: 1,
    logo: "fab fa-java",
    title: "Java",
    info: "Java is a class-based, object-oriented programming language. Write once, run anywhere!",
    link: "/java"
  },
  {
    id: 2,
    logo: "fab fa-react",
    title: "React.js",
    info: "React is a front-end JavaScript library for building user interfaces.",
    link: "/react"
  },
  {
    id: 3,
    logo: "fab fa-python",
    title: "Python",
    info: "Python is a high-level, interpreted language known for its simplicity.",
    link: "/python"
  },
  {
    id: 4,
    logo: "fas fa-code",
    title: "Coding Master",
    info: "Master problem-solving and competitive coding for interviews.",
    link: "/coding"
  },
  {
    id: 5,
    logo: "fas fa-book",
    title: "Placement Series",
    info: "Get placed in top companies by preparing smartly with our guide.",
    link: "/placement"
  },
  {
    id: 6,
    logo: "fas fa-user-graduate",
    title: "Study Material",
    info: "Best resources to prepare for interviews and aptitude tests.",
    link: "#"
  },
  {
    id: 7,
    logo: "fab fa-js",
    title: "JavaScript",
    info: "JS is the language of the web. Learn how to make your sites dynamic.",
    link: "/src/JavaScript"
  },
  {
    id: 8,
    logo: "fas fa-database",
    title: "MySQL",
    info: "Learn how to manage and query relational databases using SQL.",
    link: "/src/MySql"
  }
];

const Courses = () => {
  const [serviceData] = useState(CoursesData);

  return (
    <>
      <Navbar />

      {/* CSS Style in same file */}
      <style>{`
        .course-section {
          background: #dfd9e6;
          padding: 70px 20px;
          color:rgb(120, 115, 115);
          font-family: 'Segoe UI', sans-serif;
        }

        .course-heading {
          text-align: center;
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 50px;
          color:rgb(169, 138, 182);
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
          border-radius: 1rem;
          padding: 30px 20px;
          box-shadow: 0 0 25px rgba(176, 154, 175, 0.74);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          text-align: center;
          transform-style: preserve-3d;
        }

        .course-card:hover {
          transform: rotateY(10deg) scale(1.03);
          box-shadow: 0 0 30px rgba(129, 121, 129, 0.66);
        }

        .course-icon {
          font-size: 3rem;
          color:rgb(0, 0, 0);
          margin-bottom: 15px;
        }

        .course-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 10px;
          color:rgb(191, 141, 203);
        }

        .course-info {
          font-size: 1.5rem;
          color:rgb(0, 0, 0);
          margin-bottom: 20px;
        }

        .course-button {
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid rgb(3, 16, 14);
          color:rgb(1, 6, 5);
          border-radius: 25px;
          text-decoration: none;
          transition: 0.3s;
          font-weight: 600;
        }

        .course-button:hover {
          background:rgb(144, 100, 175);
          color:rgb(82, 84, 88);
        }

        @media (max-width: 500px) {
          .course-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="course-section">
        <h1 className="course-heading">Our Best Courses</h1>
        <div className="card-grid">
          {serviceData.map(({ id, logo, title, info, link }) => (
            <div className="course-card" key={id}>
              <div className="course-icon">
                <i className={logo}></i>
              </div>
              <div className="course-title">{title}</div>
              <div className="course-info">{info}</div>
              <a href={link} className="course-button">Explore</a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;