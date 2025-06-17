// src/App.jsx
import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../navbar";
import Quiz from "./Quiz";


const App1 = () => {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default App1;
