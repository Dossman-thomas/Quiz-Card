import Button from "react-bootstrap/Button";
import FlashCard from "../components/FlashCard";
import { getCards } from "../services/cardService";
import { useEffect, useState } from "react";

export default function StudyPage() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      const storedCards = await getCards();
      setCards(storedCards);
    };
    fetchCards();
  }, []);

   const handleNext = () => {
    if (cards.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }
  };

  const handlePrevious = () => {
    if (cards.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length); 
    }
  };


return (
    <div className="container-fluid centered flex-column gap-3">
      {cards.length > 0 ? (
        <>
          <FlashCard
            key={cards[currentIndex].id}
            question={cards[currentIndex].question}
            answer={cards[currentIndex].answer}
          />
          <div className="d-flex justify-content-center gap-4" style={{ width: "400px" }}>
            <Button variant="outline-primary" onClick={handlePrevious}>
              ⬅️
            </Button>
            <Button variant="outline-primary" onClick={handleNext}>
              ➡️
            </Button>
          </div>
        </>
      ) : (
        <p>No flashcards found. Add some to start studying!</p>
      )}
    </div>
  );
}
