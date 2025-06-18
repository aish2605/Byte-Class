// src/App.jsx
import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import Quiz from "./Quiz";


const App1 = () => {
  return (
    <div style={{display:"flex",
      flexDirection:"column",
      height:"100vh",
      width:"100vw",
        AlignItems:"center",
       justifyContent:"center" ,backgroundColor:"#dfd9e6"}} >
      <h1   style={{display:"flex",
      
        AlignItems:"center",
       justifyContent:"center" ,fontSize:"40px"}}>Welcome to the Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default App1;
