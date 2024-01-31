import { useState, useEffect } from "react";

export default function QuestionTimer({ questionTime }) {
  const [remainingTime, setRemainingTime] = useState(questionTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      return () => clearTimeout(timer);
    }, questionTime);
  }, [questionTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
      return () => clearInterval(interval);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={questionTime} min={0}></progress>;
}
