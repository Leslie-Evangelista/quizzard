import React, { useState } from "react";
import './questions.css';


  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What does HTML stand for in web development?",
      options: [
        { id: 0, text: "Hyper Text Markup Language", isCorrect: true },
        { id: 1, text: "Hyperlink and Text Markup Language", isCorrect: false },
        { id: 2, text: "High Tech Markup Language", isCorrect: false },
        { id: 3, text: "Home Tool Markup Language", isCorrect: false },
      ],
    },
    {
      text: "Which programming language is often used for building the logic in web development?",
      options: [
        { id: 0, text: "HTML", isCorrect: false },
        { id: 1, text: "CSS", isCorrect: false },
        { id: 2, text: "JavaScript", isCorrect: true },
        { id: 3, text: "Python", isCorrect: false },
      ],
    },
    {
      text: "What does CSS stand for in web development?",
      options: [
        { id: 0, text: "Cascading Style Sheets", isCorrect: true },
        { id: 1, text: "Centralized Style Sheets", isCorrect: false },
        { id: 2, text: "Computer Style Sheets", isCorrect: false },
        { id: 3, text: "Creative Style Sheets", isCorrect: false },
      ],
    },
    {
      text: "In JavaScript, what is the purpose of the 'querySelector' method?",
      options: [
        { id: 0, text: "To query a database", isCorrect: false },
        { id: 1, text: "To select HTML elements based on CSS-style selectors", isCorrect: true },
        { id: 2, text: "To create a new element", isCorrect: false },
        { id: 3, text: "To define a constant variable", isCorrect: false },
      ],
    },
    {
      text: "What does API stand for in the context of web development?",
      options: [
        { id: 0, text: "Application Interface Protocol", isCorrect: false },
        { id: 1, text: "Automated Programming Interface", isCorrect: false },
        { id: 2, text: "Application Programming Interface", isCorrect: true },
        { id: 3, text: "Advanced Program Integration", isCorrect: false },
      ],
    },
  ];

  // Helper Functions
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Web Development Quiz 🚀</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>Question: {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

