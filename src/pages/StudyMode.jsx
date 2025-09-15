import Button from "react-bootstrap/Button";
import FlashCard from "../components/FlashCard";
import { getCards } from "../services/cardService";
import { useEffect, useState } from "react";

export default function StudyPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const storedCards = await getCards();
      setCards(storedCards);
    };
    fetchCards();
  }, []);

  return (
    <div className="container-fluid centered flex-column gap-3 mt-5">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <FlashCard
            key={index}
            question={card.question}
            answer={card.answer}
          />
        ))
      ) : (
        <p>No flashcards found! Add some first to begin studying!</p>
      )}
    </div>
  );
}
