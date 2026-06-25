import { useState } from "react";
import "../styles/FlashcardModal.css";

function FlashcardModal({ topic, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = topic.data[currentIndex];

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev === topic.data.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      prev === 0 ? topic.data.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <h3>{topic.label}</h3>

        <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
          <p className="flashcard-label">
            {showAnswer ? "Answer" : "Question"}
          </p>
          <h4>{showAnswer ? currentCard.answer : currentCard.question}</h4>
          <span className="flip-hint">(click card to flip)</span>
        </div>

        <div className="flashcard-controls">
          <button onClick={handlePrev}>⬅ Previous</button>
          <span className="card-counter">
            {currentIndex + 1} / {topic.data.length}
          </span>
          <button onClick={handleNext}>Next ➡</button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardModal;