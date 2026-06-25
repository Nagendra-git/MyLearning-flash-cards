function Java() {
  const cards = [
    {
      question: "What is JVM?",
      answer: "Java Virtual Machine executes Java bytecode."
    },
    {
      question: "What is JDK?",
      answer: "Java Development Kit contains tools required for Java development."
    },
    {
      question: "What is OOP?",
      answer: "Object-Oriented Programming based on objects and classes."
    }
  ];

  return (
    <div>
      <h1>Java Flashcards</h1>

      {cards.map((card, index) => (
        <div key={index} className="flashcard">
          <h3>{card.question}</h3>
          <p>{card.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Java;