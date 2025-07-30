import { useEffect, useState } from "react";
import { StartScreen, Quiz, Result } from "./components";
import questionData from "./data/questions"




function App() {
  const [screen, setScreen] = useState("start");
  const [score, setScore]  = useState(0);
  const [theme, setTheme] = useState(() => {
    // Local storage'dan tema tercihini al, yoksa "light" kullan
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    // Tema değiştiğinde local storage'a kaydet
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    

    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  };
  
 
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex justify-end p-2 sm:p-4">
        <button onClick={toggleTheme} className="btn btn-ghost btn-sm sm:btn-md">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
      <div className="flex items-center justify-center min-h-screen text-base sm:text-xl px-4">
        {screen === "start" && (
          <StartScreen onStart={() => setScreen("quiz")} />
        )}

        {screen === "quiz" && (
          <Quiz
            questions={questionData}
            onFinish={(finalScore) => {
              setScore(finalScore);
              setScreen("result");
            }}
          />
        )}

        {screen === "result" && (
          <Result 
            score={score}
            totalQuestions={questionData.length}
            onRestart={() => setScreen("start")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
