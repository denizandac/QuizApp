import { useState } from "react";

export default function QuestionTimeSelect({ onQuestionTimeSelect }) {
  return (
    <select onChange={(e) => onQuestionTimeSelect(e.target.value)}>
      <option value="10000">10 seconds</option>
      <option value="15000">15 seconds</option>
      <option value="20000">20 seconds</option>
    </select>
  );
}
