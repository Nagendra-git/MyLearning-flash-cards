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
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div
          className="flashcard"
          onClick={() => setShowAnswer(!showAnswer)}
        >

          {!showAnswer ? (
            <h4>{currentCard.question}</h4>
          ) : (
            <div className="answer-content">
              <p>{currentCard.answer}</p>

              {currentCard.pseudoCode && (
                <div className="code-block">
                <div className="code-header">
                    Pseudo Code
                </div>

                <pre>
                    <code>{currentCard.pseudoCode}</code>
                </pre>
            </div>
            )}
            </div>
          )}

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