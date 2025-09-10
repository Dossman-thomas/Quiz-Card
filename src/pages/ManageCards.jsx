import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardForm from "../components/CardForm";

export default function ManageCardsPage() {
  const [cards, setCards] = useState([
    { id: Date.now(), question: "", answer: "" }, // start with an empty card
  ]);

  const navigate = useNavigate();

  // Add a new blank card form
  const handleAddNewCard = () => {
    const newCard = { id: Date.now(), question: "", answer: "" };
    setCards([...cards, newCard]);
  };

  // Update a card
  const handleUpdateCard = (id, updatedCard) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, ...updatedCard } : card))
    );
  };

  // Delete a card
  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  // Save to LocalStorage or DB
  const handleSaveCard = (id) => {
    console.log(
      "Saving card with id:",
      id,
      cards.find((card) => card.id === id)
    );
  };

  return (
    <div className="p-4 mt-5">
      <h1 className="mb-4">Manage Cards</h1>
      <p>
        <em>Use the forms below to edit your flashcards.</em>
      </p>

      {cards.map((card) => (
        <CardForm
          key={card.id}
          id={card.id}
          question={card.question}
          answer={card.answer}
          onUpdate={handleUpdateCard}
          onDelete={handleDeleteCard}
          onSave={handleSaveCard}
        />
      ))}

      <div className="d-flex gap-3 mt-4 justify-content-center">
        <Button variant="primary" onClick={handleAddNewCard}>
          ➕ Add New Card
        </Button>
        <Button variant="success" onClick={() => navigate("/study")}>
          📖 Want to Study?
        </Button>
      </div>
    </div>
  );
}
