// FlashCard component for displaying individual flashcards
import { useState } from "react";
import "../styles/flashCard.css";

export default function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setIsFlipped(!isFlipped)}>
      {/* FRONT SIDE */}
      {!isFlipped ? (
        <div className="flashcard-front">
          <p className="question-text">{question}</p>
        </div>
      ) : (
        /* BACK SIDE */
        <div className="flashcard-back">
          <div className="notebook-lines">
            <p className="p-3 m-0">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
