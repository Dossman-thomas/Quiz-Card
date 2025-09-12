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
            {answer.split("\n").map((line, idx) => (
              <p
                key={idx}
                className={`answer-line ${idx === 0 ? "first-line" : ""}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
