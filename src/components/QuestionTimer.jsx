import { useState, useEffect } from "react";

export default function QuestionTimer({ onTimeOut, totalTime }) {
  const [remainingTime, setRemainingTime] = useState(totalTime);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, totalTime);
    return () => clearTimeout(timer);
  }, [onTimeOut, totalTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      id="question-time"
      max={totalTime}
      value={remainingTime}
    ></progress>
  );
}
