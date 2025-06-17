import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import CodingData from "./CodingData";








const Codingm = () => {
  const [serviceData, setServiceData] = useState(CodingData);
  return (
    <>
    <Navbar/>
    
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
           coding Master
          </h1>
          {/* <h2>A Java developer is a specialized programmer or you can say coder who teams up with software engineers to combine Java into business software, applications, and websites</h2> */}
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info ,link} = curElem;
              return (
                <>
                  <div
                    className="col-11 col-lg-4 col-xl-4 work-container-subdiv d-grid gap-1 col-6 mx-auto"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i><h1></h1>
                    
                   <button className="btn btn-info  btn-lg"> <a href={link} >{title}</a></button>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Footer/>
   
    </>
  );
};

export default Codingm;
