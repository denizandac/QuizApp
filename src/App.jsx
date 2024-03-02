import { useRef, useState } from "react";
import QuestionTimer from "./components/QuestionTimer.jsx";
import Modal from "./components/Modal.jsx";
import QuestionTimeSelect from "./components/QuestionTimeSelect.jsx";
import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  const modalRef = useRef();

  const handleShowModal = () => {
    modalRef.current.showModal();
  };

  return (
    <div className="App">
      <Header />
      <Quiz />
    </div>
  );
}

export default App;
