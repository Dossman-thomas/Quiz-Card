import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CardForm from "../components/CardForm";
import { getCards, createCard, updateCard, deleteCard, toggleStarred } from "../services/cardService"

export default function ManageCardsPage() {
  // State to add new cards to the page
  const [cards, setCards] = useState([
    { id: Date.now(), question: "", answer: "" }, // start with an empty card
  ]);

  // Load existing cards from local storage
  useEffect(() => {
    const loadCards = async () => {
      const cards = await getCards();
      setCards(cards);
    };
    loadCards();
  }, []);

  const navigate = useNavigate();

  // Add a new blank card form
  const handleAddNewCardForm = () => {
    const newCard = { id: Date.now(), question: "", answer: "" };
    setCards([...cards, newCard]);
  };

// Handle saving a card
const handleSaveCard = async (id, fields) => {
  const savedCard = await createCard({ id, ...fields });
  setCards((prev) =>
    prev.map((c) => (c.id === id ? savedCard : c))
  );
};


  // Update a card
const handleUpdateCard = async (id, fields) => {
  const updated = await updateCard(id, fields);
  setCards((prev) => prev.map((c) => (c.id === id ? updated : c)));
};


  // Delete a card
  const handleDeleteCard = async (id) => {
    await deleteCard(id);
    setCards((prev) => prev.filter((card) => card.id !== id));
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
        <Button variant="primary" onClick={handleAddNewCardForm}>
          ➕ Add New Card
        </Button>
        <Button variant="success" onClick={() => navigate("/study")}>
          📖 Want to Study?
        </Button>
      </div>
    </div>
  );
}
