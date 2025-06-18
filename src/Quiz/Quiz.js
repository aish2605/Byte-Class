// src/Quiz.jsx
import React, { useState } from 'react';
import './Quiz.css'; // Add this import for custom styles

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
        question: 'Which of the following is a Java keyword?',
        options: ['String', 'System', 'println', 'extends'],
        correct: 'extends',
      },
      {
        question: 'Which of the following is used to define a C++ class?',
        options: ['class', 'Class', 'define', 'def'],
        correct: 'class',
      },
      {
        question: 'What does JVM stand for?',
        options: ['Java Variable Machine', 'Java Virtual Machine', 'Java Visual Machine', 'Java Verification Machine'],
        correct: 'Java Virtual Machine',
      },
      {
        question: 'Which operator is used to access the address of a variable in C?',
        options: ['&', '*', '#', '%'],
        correct: '&',
      },
      {
        question: 'Which of the following is not a primitive data type in Java?',
        options: ['int', 'float', 'char', 'String'],
        correct: 'String',
      },
      {
        question: 'What is the file extension for a C++ source file?',
        options: ['.cpp', '.java', '.py', '.cs'],
        correct: '.cpp',
      },
      {
        question: 'Which method is the entry point of a Java program?',
        options: ['main', 'start', 'begin', 'init'],
        correct: 'main',
      },
      {
        question: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'HyperText Machine Language', 'HyperTool Markup Language', 'Hyperlinks and Text Markup Language'],
        correct: 'HyperText Markup Language',
      },
      {
        question: 'Which company developed the C# language?',
        options: ['Microsoft', 'Google', 'Apple', 'Oracle'],
        correct: 'Microsoft',
      },
      {
        question: 'Which language is primarily used for web development?',
        options: ['Python', 'Java', 'C++', 'JavaScript'],
        correct: 'JavaScript',
      },
      {
        question: 'What is the correct syntax to create a function in Python?',
        options: ['function myFunction()', 'def myFunction():', 'create myFunction()', 'func myFunction()'],
        correct: 'def myFunction():',
      },
      {
        question: 'What is the standard file extension for JavaScript files?',
        options: ['.js', '.java', '.jsx', '.ts'],
        correct: '.js',
      },
      {
        question: 'In C++, what is the output of the following code: std::cout << "Hello, World!";',
        options: ['Hello, World!', 'std::cout << "Hello, World!";', 'Hello World', 'std::out << "Hello, World!";'],
        correct: 'Hello, World!',
      },
      {
        question: 'Which of the following is used to style HTML pages?',
        options: ['CSS', 'JavaScript', 'Python', 'PHP'],
        correct: 'CSS',
      },
      
  ];

  const handleChange = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        score += 1;
      }
    });
    setResult(score);
  };

  const getResultMessage = (score) => {
    if (score === questions.length) {
      return {
        message: 'Perfect score! You got all answers correct.',
        link: 'https://www.perfect-score.com',
      };
    } else if (score > questions.length / 2) {
      return {
        message: 'Good job! You got more than half correct.',
        link: 'https://www.good-job.com',
      };
    } else {
      return {
        message: 'Better luck next time. Keep practicing!',
        link: 'https://www.keep-practicing.com',
      };
    }
  };

  if (result !== null) {
    const resultMessage = getResultMessage(result);
    return (
      <div className="quiz-container">
        <h2>Your Score: {result}/{questions.length}</h2>
        <p>{resultMessage.message}</p>
        <a href={resultMessage.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Question {currentQuestion + 1}</h1>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option) => (
        <label key={option} className={`option-label ${answers[currentQuestion] === option ? 'selected' : ''}`}>
          <input
            type="radio"
            name={`question-${currentQuestion}`}
            value={option}
            checked={answers[currentQuestion] === option}
            onChange={() => handleChange(option)}
          />
          {option}
        </label>
      ))}
      <div className="navigation-buttons">
        {currentQuestion > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentQuestion < questions.length - 1 && <button onClick={handleNext}>Next</button>}
        {currentQuestion === questions.length - 1 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default Quiz;
