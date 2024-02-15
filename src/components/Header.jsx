import headerLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={headerLogo} alt="Quiz App Logo" />
      <h1>Quiz App</h1>
    </header>
  );
}
