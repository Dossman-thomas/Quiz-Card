// FlashCard component for displaying individual flashcards
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/flashCard.css";

export default function FlashCard({
  id,
  question,
  answer,
  isStarred,
  onToggleStar,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleStarClick = (event) => {
    event.stopPropagation(); // Prevent flip when clicking the star
    if (onToggleStar) {
      onToggleStar(id);
    }
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "is-flipped" : ""}`}
      onClick={toggleFlip}
    >
      <div className="flashcard-inner">
        {/* Star button overlay */}
        <div className="star-button">
          <Button
            variant={isStarred ? "warning" : "outline-warning"}
            size="sm"
            onClick={handleStarClick}
          >
            ★
          </Button>
        </div>
        {/* Front of card */}
        <div className="flashcard-front">{question}</div>

        {/* Back of card */}
        <div className="flashcard-back">
          <div className="notebook-lines">
            <p className="p-3 m-0">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
