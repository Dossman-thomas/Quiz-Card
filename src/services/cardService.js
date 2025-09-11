// Crud Service functions for Getting, Creating, Updating, and Deleting flashcards
const STORAGE_KEY = "flashcards";

const getCards = async () => {
  const cards = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return cards;
};

const createCard = async (cardData) => {
  const cards = await getCards();
  const newCard = { id: Date.now(), ...cardData };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...cards, newCard]));
  return newCard;
};

const updateCard = async (cardId, updatedData) => {
  const cards = await getCards();
  const updatedCards = cards.map((card) =>
    card.id === cardId ? { ...card, ...updatedData } : card
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
  return updatedCards.find((card) => card.id === cardId);
};

const deleteCard = async (cardId) => {
  const cards = await getCards();
  const updatedCards = cards.filter((card) => card.id !== cardId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCards));
  return cardId;
};
