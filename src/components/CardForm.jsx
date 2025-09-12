import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function CardForm({
  // card form props
  id,
  question: initialQuestion = "",
  answer: initialAnswer = "",
  onSave,
  onEdit,
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
    <Card className="mb-3 p-3 mx-auto">
      <Card.Body>
        {/* Top-right action buttons */}
        <div className="d-flex justify-content-end mb-2">
          <Button
            variant="outline-secondary"
            size="sm"
            className="me-2"
            onClick={() => onEdit && onEdit(id, { question, answer })}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            className="me-2"
            onClick={() => onDelete && onDelete(id)}
          >
            Delete
          </Button>
          <Button
            variant={isStarred ? "warning" : "outline-warning"}
            size="sm"
            onClick={() => onToggleStar && onToggleStar(id)}
          >
            ★
          </Button>
        </div>

        {/* Card inputs */}
        <Form>
          <Form.Group controlId={`question-${id}`} className="mb-3">
            <Form.Label className="text-start w-100">Question: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId={`answer-${id}`} className="mb-3">
            <Form.Label className="text-start w-100">Answer: </Form.Label>
            <Form.Control
              type="textarea"
              as="textarea"
              aria-label="Enter answer text area"
              placeholder="Enter answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="w-100">
            Save
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
