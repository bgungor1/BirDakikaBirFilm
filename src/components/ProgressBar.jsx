function ProgressBar({currentQuestion, totalQuestions}) {

    return(
        <div className="flex items-center gap-2 w-32 sm:w-40">
        <progress className="progress progress-primary w-full" value={currentQuestion}  max={totalQuestions}></progress>
        <span className="text-xs sm:text-sm font-semibold">{currentQuestion}/{totalQuestions}</span>
        </div>
    )

}

export  default ProgressBar