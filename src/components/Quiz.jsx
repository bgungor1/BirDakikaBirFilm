import { useState, useCallback, useRef } from "react";
import { Timer, ProgressBar } from "./index";

function Quiz({questions, onFinish}) {
    const [currentQuestionIndex, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [resetTimer, setResetTimer] = useState(0);
    const scoreRef = useRef(0);

    // Soruları karıştır
    const shuffledQuestions = useRef(
        [...questions].sort(() => Math.random() - 0.5)
    );

    const currentQuestion = shuffledQuestions.current[currentQuestionIndex];

    const handleAnswer = (answer) => {
        // Sadece bir kez cevap seçilebilir
        if (selectedAnswer === null) {
            setSelectedAnswer(answer);
            if (answer === currentQuestion.answer) {
                const newScore = score + 1;
                setScore(newScore);
                scoreRef.current = newScore;
            }
        }
        // Eğer zaten cevap seçilmişse, hiçbir şey yapma
    }






























    
    const handleNext = useCallback(() => {
        if (currentQuestionIndex + 1 < shuffledQuestions.current.length) {
            setCurrentQuestion(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setResetTimer((prev) => prev + 1);
        } else {
            onFinish(scoreRef.current);
        }
    }, [currentQuestionIndex, onFinish]);
    return (
        <div className ="flex flex-col items-center justify-center min-h-screen bg-base-200">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mb-4 sm:mb-6 px-2 sm:px-4 gap-4">
        <ProgressBar
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={shuffledQuestions.current.length}
        />
        <Timer
            duration={60}
            resetTrigger={resetTimer}
            onTimeUp={handleNext}
        />
        </div>
        <div className = "card bg-base-100 shadow-xl p-4 sm:p-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center mx-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        {currentQuestion.question}
        </h2>

        <div className="flex flex-col gap-2 sm:gap-4">
        {currentQuestion.options.map((option) => (
            <button 
                key={option} 
                className={`btn ${
                    selectedAnswer === option 
                        ? option === currentQuestion.answer 
                            ? 'btn-success' 
                            : 'btn-error'
                        : selectedAnswer !== null && option === currentQuestion.answer
                            ? 'btn-success'
                            : 'btn-outline'
                }`}
                onClick={() => handleAnswer(option)}
            >
                {option}
            </button>
        ))}
        </div>
        <button 
            className="btn btn-primary w-full mt-4 sm:mt-6 text-sm sm:text-base" 
            onClick={handleNext}
            disabled={selectedAnswer === null}
        >
            {currentQuestionIndex + 1 < shuffledQuestions.current.length ? 'Sonraki' : 'Bitir'}
        </button>
        </div>
        
        </div>
        
        )
};

export default Quiz