import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <style>{`
        .navbar-bg {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          color: #dfd9e6;
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          animation: fadeSlideDown 0.6s ease-out;
        }

        @keyframes fadeSlideDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .navbar-brand {
          font-size: 2rem;
          font-weight: 800;
          color:rgb(178, 167, 192); !important;
          text-shadow: 0 0 5px rgb(135, 124, 148);;
        }

        .nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: #dfd9e6 !important;
          margin: 0 12px;
          position: relative;
          transition: all 0.3s ease-in-out;
        }

        .nav-link::after {
          content: "";
          width: 0%;
          height: 2px;
          background: #dfd9e6;;
          position: absolute;
          left: 0;
          bottom: -5px;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: #dfd9e6; !important;
        }

        .btn-style {
          background-color: transparent;
          border: 2px solid #dfd9e6;;
          color: #dfd9e6;;
          padding: 8px 16px;
          border-radius: 20px;
          margin-left: 20px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-style:hover {
          background-color: #dfd9e6;;
          color: #000;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .nav-link {
            margin: 8px 0;
          }

          .btn-style {
            margin-top: 12px;
          }
        }
      `}</style>

      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="/home">
              Byte-Class
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Courses">Courses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/src/Quiz">SkillTest</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/src/Roadmap">Roadmap</NavLink>
                </li>
              </ul>

              <button className="btn-style" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;