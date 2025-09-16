import Button from "react-bootstrap/Button";
import FlashCard from "../components/FlashCard";
import { getCards } from "../services/cardService";
import { useEffect, useState } from "react";

export default function StudyPage() {
  // State management
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch flashcards to display
  useEffect(() => {
    const fetchCards = async () => {
      const storedCards = await getCards();
      setCards(storedCards);
    };
    fetchCards();
  }, []);

  // Event handlers
  const handleNext = () => {
    if (cards.length > 0) { // ensures we don't divide by 0 and break things
      setCurrentIndex((prev) => (prev + 1) % cards.length); // prev = previous state, and % cards.length wraps around when we reach the end thus creating an endless loop of cards
    }
  };

  const handlePrevious = () => {
    if (cards.length > 0) { // ensures we don't divide by 0 and break things
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length); // prev = previous state, and % cards.length wraps around when we reach the end thus creating an endless loop of cards
    }
  };

  const handleShuffle = () => {
    // Shuffle the cards, guaranteeing every permutation is equally likely
    if (cards.length > 1) { // no need to shuffle if 0 or 1 card
      // Fisher-Yates shuffle algorithm
      const shuffled = [...cards]; // create shallow copy of array so we don't mutate the state directly
      for (let i = shuffled.length - 1; i > 0; i--) { // start from end of the array
        const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements at i and j
      }
      setCards(shuffled); // update cards state in new random order
      setCurrentIndex(0); // restart at first card in new order
    }
  };

  return (
    <div className="container-fluid centered flex-column gap-4">
      {cards.length > 0 ? (
        <>
          <h3 className="m-0">Click to flip your cards!</h3>
          <FlashCard
            key={cards[currentIndex].id}
            question={cards[currentIndex].question}
            answer={cards[currentIndex].answer}
          />
          <div
            className="d-flex justify-content-center gap-4"
            style={{ width: "400px" }}
          >
            <Button variant="outline-primary" onClick={handlePrevious}>
              ⬅️
            </Button>
            <Button variant="outline-secondary" onClick={handleShuffle}>
              🔀
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
