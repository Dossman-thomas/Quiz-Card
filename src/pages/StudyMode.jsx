import Button from "react-bootstrap/Button";
import FlashCard from "../components/FlashCard";

export default function StudyPage() {
  return (
    <div className="container-fluid centered">
      <FlashCard question="What is React?" answer="A JavaScript library for building user interfaces. that uses JSX, a syntax extension that allows mixing HTML with JavaScript, and enables developers to create reusable UI components. It allows for the creation of single-page applications with a smooth user experience." />
    </div>
  );
}
