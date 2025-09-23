import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "../styles/cardForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faStar } from "@fortawesome/free-solid-svg-icons";

export default function CardForm({
  // card form props
  id,
  question: initialQuestion = "",
  answer: initialAnswer = "",
  onSave,
  onDelete,
  isStarred = false,
  onToggleStar,
}) {
  //   state management
  const [question, setQuestion] = useState(initialQuestion);
  const [answer, setAnswer] = useState(initialAnswer);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (onSave) {
      onSave(id, { question, answer });
    }
  };

  return (
    <Card className="mb-4 p-2 mx-auto" id="card-form">
      <Card.Body>
        {/* Top-right action buttons */}
        <div className="d-flex justify-content-end mb-2">
          <Button
            size="md"
            className="me-2 card-btn"
            onClick={() => onDelete && onDelete(id)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
          <Button
            size="sm"
            className="card-btn"
            id={isStarred ? "" : "starred-btn"}
            onClick={() => onToggleStar && onToggleStar(id)}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
        </div>

        {/* Card inputs */}
        <Form>
          <Form.Group controlId={`question-${id}`} className="mb-3">
            <Form.Label className="text-start w-100">Question: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId={`answer-${id}`} className="mb-4">
            <Form.Label className="text-start w-100">Answer: </Form.Label>
            <Form.Control
              type="textarea"
              as="textarea"
              aria-label="Enter answer text area"
              placeholder="Enter Answer"
              className="answer-input"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="w-100" id="save-btn" onClick={handleSubmit}>
            Save
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
