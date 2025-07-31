import React, { useState } from "react";

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
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
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

  const score = selectedAnswers.reduce(
    (acc, ans, idx) => (ans === questions[idx].answer ? acc + 1 : acc),
    0
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Quiz App</h1>

      {showResult ? (
        <div>
          <h2>Quiz Finished!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>

          {questions.map((q, idx) => (
            <div key={idx} style={{ marginTop: "20px" }}>
              <p>
                <strong>Q{idx + 1}:</strong> {q.question}
              </p>
              <p>
                Your Answer:{" "}
                <span
                  style={{
                    color:
                      selectedAnswers[idx] === q.answer ? "green" : "red",
                  }}
                >
                  {selectedAnswers[idx] || "No Answer"}
                </span>
              </p>
              <p style={{ color: "green" }}>Correct Answer: {q.answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => {
            const selected = selectedAnswers[currentQuestion] === option;
            const correct = option === questions[currentQuestion].answer;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                style={{
                  margin: "5px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: selected
                    ? correct
                      ? "green"
                      : "red"
                    : "white",
                  color: selected ? "white" : "black",
                }}
              >
                {option}
              </button>
            );
          })}

          <div style={{ marginTop: "20px" }}>
            <button onClick={handlePrev} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              style={{ marginLeft: "10px" }}
            >
              Next
            </button>
            {currentQuestion === questions.length - 1 && (
              <button
                onClick={handleSubmit}
                style={{ marginLeft: "10px", backgroundColor: "blue", color: "white" }}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
