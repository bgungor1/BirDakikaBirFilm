import { useEffect, useState } from "react";
import { StartScreen, Quiz, Result, LoadingScreen, ErrorScreen, Navbar } from "./components";
import { getQuestions } from "./services/api";




function App() {
  const [screen, setScreen] = useState("start");
  const [score, setScore]  = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(() => {
    // Local storage'dan tema tercihini al, yoksa "light" kullan
    return localStorage.getItem("theme") || "light";
  });
  // Soruları API'den yükle
  const loadQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      const questionsData = await getQuestions(10); // 10 film sorusu
      setQuestions(questionsData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };


  // Tema değiştiğinde local storage'a kaydet
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    // Tema değiştiğinde local storage'a kaydet
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Quiz başlatıldığında soruları yükle
  const handleStartQuiz = () => {
    loadQuestions();
    setScreen("quiz");
  };

  // Hata durumunda tekrar dene
  const handleRetry = () => {
    loadQuestions();
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  };
  
 
  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="flex justify-end p-2 sm:p-4">
        <button onClick={toggleTheme} className="btn btn-ghost btn-sm sm:btn-md">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
      <div className="flex items-center justify-center min-h-screen text-base sm:text-xl px-4">
        {screen === "start" && (
          <StartScreen onStart={handleStartQuiz} />
        )}

        {screen === "quiz" && (
          <>
            {loading && <LoadingScreen />}
            {error && <ErrorScreen error={error} onRetry={handleRetry} />}
            {!loading && !error && questions.length > 0 && (
              <Quiz
                questions={questions}
                onFinish={(finalScore) => {
                  setScore(finalScore);
                  setScreen("result");
                }}
              />
            )}
          </>
        )}

        {screen === "result" && (
          <Result 
            score={score}
            totalQuestions={questions.length}
            onRestart={() => setScreen("start")}
          />
        )}
      </div>
    </div>
  );
}

export default App;
