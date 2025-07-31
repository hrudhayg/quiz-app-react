import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "Java", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: "Facebook",
  },
  {
    question: "Which is a CSS framework?",
    options: ["Node.js", "Bootstrap", "MongoDB", "React"],
    answer: "Bootstrap",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleRestart = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const score = selectedAnswers.reduce(
    (acc, ans, idx) => (ans === questions[idx].answer ? acc + 1 : acc),
    0
  );

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow p-4 w-75 text-center">
        <h1 className="mb-4 text-primary">React Quiz App</h1>

        {showResult ? (
          <div>
            <h2 className="text-success">Quiz Finished!</h2>
            <p className="fs-5">
              Your Score: {score} / {questions.length}
            </p>

            {questions.map((q, idx) => (
              <div
                key={idx}
                className="border rounded p-3 my-3 text-start bg-white"
              >
                <p>
                  <strong>Q{idx + 1}:</strong> {q.question}
                </p>
                <p>
                  Your Answer:{" "}
                  <span
                    className={
                      selectedAnswers[idx] === q.answer
                        ? "text-success fw-bold"
                        : "text-danger fw-bold"
                    }
                  >
                    {selectedAnswers[idx] || "No Answer"}
                  </span>
                </p>
                <p className="text-success">
                  Correct Answer: <strong>{q.answer}</strong>
                </p>
              </div>
            ))}

            <button className="btn btn-primary mt-3" onClick={handleRestart}>
              🔄 Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2>
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="mb-3">{questions[currentQuestion].question}</p>

            <div className="d-flex flex-column align-items-center">
              {questions[currentQuestion].options.map((option, index) => {
                const selected = selectedAnswers[currentQuestion] === option;
                const correct = option === questions[currentQuestion].answer;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`btn my-2 w-50 ${
                      selected ? (correct ? "btn-success" : "btn-danger") : "btn-outline-primary"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="mt-3">
              <button
                className="btn btn-secondary me-2"
                onClick={handlePrev}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              {currentQuestion < questions.length - 1 ? (
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button className="btn btn-success" onClick={handleSubmit}>
                  Submit Quiz
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
