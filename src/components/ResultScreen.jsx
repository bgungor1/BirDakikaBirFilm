import { useEffect } from 'react';
import confetti from 'js-confetti';

function Result({score, totalQuestions, onRestart}) {
    useEffect(() => {
        // Eğer 5 veya daha fazla doğru cevap varsa confetti patlat
        if (score >= 5) {
            const jc = new confetti();
            jc.addConfetti({
                emojis: ['🎉', '🎊', '🏆', '⭐', '💯'],
                emojiSize: 25,
                confettiNumber: 30,
            });
        }
    }, [score]);

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4">
    <div className="card bg-base-100 shadow-xl p-4 sm:p-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-center">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
    Quiz Bitti!
    </h2>
    <div className={`alert ${score > totalQuestions / 2 ? "alert-success" : "alert-error"} text-base sm:text-lg mb-4 sm:mb-6`}>
        <span>
            Toplam {totalQuestions} sorudan {score} tanesini doğru bildiniz.
        </span>
    </div>
    <button onClick={onRestart} className="btn btn-primary btn-md sm:btn-lg w-full hover:scale-105 transition text-sm sm:text-base">
        Tekrar Başla
    </button>


    </div>
    </div>
 );

}

export default Result