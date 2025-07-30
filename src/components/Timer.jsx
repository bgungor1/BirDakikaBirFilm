import { useState, useEffect } from "react";


function Timer({duration, onTimeUp, resetTrigger}) {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTime(duration);
        const interval = setInterval(() => {
          setTime((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              onTimeUp(); // Süre bittiğinde Quiz'e bildir
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
    
        return () => clearInterval(interval);
      }, [resetTrigger, duration, onTimeUp]);

      return (
        <div className="flex items-center gap-2 w-32 sm:w-40">
        <progress className="progress progress-accent w-full"
         value = {time}
         max = {duration}></progress>
        <span className="text-xs sm:text-sm font-semibold">{time}s</span>
        </div>
      );


}

export default Timer