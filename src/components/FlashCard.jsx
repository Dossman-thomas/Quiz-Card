// FlashCard component for displaying individual flashcards
import { useState } from "react";
import "../styles/flashCard.css";

export default function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "is-flipped" : ""}`}
      onClick={toggleFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">{question}</div>
        <div className="flashcard-back">
          <div className="notebook-lines">
            <p className="p-3 m-0">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
