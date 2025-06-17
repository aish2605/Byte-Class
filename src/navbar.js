import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logOut, user } = useUserAuth();
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
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="/home">
              OneCourse
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active"  to="/home">
                    Home
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink className="nav-link active"  to="/service">
                    Services
                  </NavLink>
                </li> */}
                <li className="nav-item">
                <NavLink className="nav-link active"  to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active"  to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active"  to="/Courses">
                   Courses
                  </NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link active"  to="/src/Quiz">
                   SkillTest
                  </NavLink>
                </li>

                <li className="nav-item">
                <NavLink className="nav-link active"  to="/src/Roadmap">
                   Roadmap
                  </NavLink>
                </li>
              </ul>
             
              
              <button className="btn-dark  btn-style  "  onClick={handleLogout}>
          Log out
        </button>
      
               
             
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
