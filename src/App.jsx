import { useRef, useState } from "react";
import QuestionTimer from "./components/QuestionTimer.jsx";
import Modal from "./components/Modal.jsx";
import QuestionTimeSelect from "./components/QuestionTimeSelect.jsx";
import quizLogo from "./assets/quiz-logo.png";

function App() {
  const [questionTime, setQuestionTime] = useState(10000);
  const [activeQuestion, setActiveQuestion] = useState();
  const modalRef = useRef();

  const handleShowModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className="App">
      <QuestionTimeSelect onQuestionTimeSelect={setQuestionTime} />
      <button onClick={handleShowModal}>Show Modal</button>
      <Modal ref={modalRef}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <QuestionTimer questionTime={questionTime} key={Math.random()} />
      </Modal>
    </div>
  );
}

export default App;
