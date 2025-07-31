React Quiz App 🎯
A simple React-based quiz application with 5 questions.
Users can select answers, see immediate feedback (green/red), submit the quiz to view their score, and restart the quiz to play again.

🚀 Features
5 multiple-choice quiz questions

Select an answer and get instant feedback (✅ correct / ❌ wrong)

Previous / Next navigation between questions

Submit quiz to see the final score

Highlights correct and wrong answers after submission

Restart quiz to play again

🛠️ Installation & Setup
Create a new Vite React project (if not done already):

bash
Copy
Edit
npm create vite@latest quizapp
Navigate to the project folder:

bash
Copy
Edit
cd quizapp
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Your app will run at http://localhost:5173.

📂 Project Structure
pgsql
Copy
Edit
quizapp/

│── src/

│   ├── App.jsx 
       # Main Quiz App with Restart feature
│   ├── main.jsx  
     # React entry point
│   └── index.css   
   # Styling (optional)
│
│── package.json

│── vite.config.js

│── README.md

🎮 How to Play
Start the quiz and select your answers.

Navigate using Previous / Next buttons.

Click Submit Quiz on the last question.

View your score and which answers were correct or wrong.

Click Restart Quiz to play again.

🔹 Future Enhancements
Timer for each question

Randomized question order

Track high scores

