// src/RoadmapComponent.jsx
import React, { useState } from 'react';
import './Road.css'; // Add this import for custom styles

const Road = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roadmaps = {
    java: [
      'Learn Java Basics: Variables, Data Types, Operators, Control Statements',
      'OOP Concepts: Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation',
      'Advanced Java: Collections, Streams, Lambda Expressions, Functional Interfaces',
      'Java Frameworks: Spring, Hibernate',
      'Build Projects: Web Applications, REST APIs, Microservices',
      'Explore Tools: Maven, Gradle, Jenkins, Docker, Kubernetes',
    ],
    python: [
      'Learn Python Basics: Syntax, Variables, Data Types, Control Structures',
      'Advanced Python: Functions, Modules, File Handling, Error Handling',
      'OOP Concepts: Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation',
      'Web Development: Flask, Django',
      'Data Science: NumPy, Pandas, Matplotlib, Scikit-Learn',
      'Machine Learning: TensorFlow, Keras, PyTorch',
      'Build Projects: Web Applications, Data Analysis, Machine Learning Models',
    ],
    react: [
      'Learn JavaScript: ES6+, Promises, Async/Await, Fetch API',
      'React Basics: Components, Props, State, JSX',
      'Advanced React: Hooks, Context API, React Router',
      'State Management: Redux, MobX',
      'Build Projects: Single Page Applications, Progressive Web Apps',
      'Testing: Jest, React Testing Library',
      'Explore Tools: Webpack, Babel, Create React App',
    ],
    sql: [
      'Learn SQL Basics: DDL, DML, DCL Commands',
      'Advanced SQL: Joins, Subqueries, Indexes, Transactions',
      'Database Design: Normalization, ER Diagrams',
      'Database Management Systems: MySQL, PostgreSQL, Oracle',
      'Stored Procedures, Functions, Triggers',
      'Build Projects: Database-Driven Applications, Data Warehousing',
      'Explore Tools: phpMyAdmin, pgAdmin, DataGrip',
    ],
    android: [
      'Learn Java/Kotlin Basics',
      'Android Basics: Activities, Fragments, Intents, UI Components',
      'Advanced Android: RecyclerView, Navigation, Data Binding',
      'Architectures: MVC, MVP, MVVM',
      'Build Projects: Mobile Applications, Play Store Deployment',
      'Testing: Espresso, JUnit',
      'Explore Tools: Android Studio, Gradle, Firebase',
    ],
    abap: [
      'Learn ABAP Basics: Syntax, Data Types, Control Structures',
      'Advanced ABAP: Internal Tables, ALV Reporting, Module Pool Programming',
      'SAP Basics: SAP GUI, SAP Modules, Transaction Codes',
      'ABAP on HANA: CDS Views, AMDP, OData Services',
      'Build Projects: Custom Reports, Enhancements, Interfaces',
      'Explore Tools: SAP Web IDE, ABAP Development Tools (ADT)',
    ],
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="roadmap-container">
      <h1>Select Your Developer Path</h1>
      <div className="role-selection">
        <button onClick={() => handleRoleSelection('java')}>Java Developer</button>
        <button onClick={() => handleRoleSelection('python')}>Python Developer</button>
        <button onClick={() => handleRoleSelection('react')}>React Developer</button>
        <button onClick={() => handleRoleSelection('sql')}>SQL Developer</button>
        <button onClick={() => handleRoleSelection('android')}>Android Developer</button>
        <button onClick={() => handleRoleSelection('abap')}>ABAP Developer</button>
      </div>
      {selectedRole && (
        <div className="roadmap-details">
          <h2>{`${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Roadmap`}</h2>
          <ul>
            {roadmaps[selectedRole].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Road;
