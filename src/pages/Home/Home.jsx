import { useState } from "react";
import javaCards from "../../data/javaCards";
import FlashcardModal from "../../components/FlashcardModal";
import AlgorithmCards from "../../data/algorithmsCards";
import SystemDesignCards from "../../data/systemDesign";
import javaArrayCards from "../../data/javaArrayCards";
import javaStringCards from "../../data/javaStringCards";
import javaObjectCards from "../../data/javaObjectCards";
import javaMiscCards from "../../data/javaMiscCards";
import springBootTransactionalCards from "../../data/springBootTransactionalCards";
import exceptionMiscCards from "../../data/exceptionMiscCards";
import javaMultiThredingCards from "../../data/javaMultithreding";
import "../../styles/Home.css";

const topics = [
  { key: "java", label: "Java Cards", data: javaCards },
  { key: "javaarrays", label: "Java Arrays", data: javaArrayCards},
  { key: "javaStrings", label: "Java Strings", data : javaStringCards},
  { key: "javaObject", label: "Java Object", data : javaObjectCards},
  { key: "javaMisc", label: "Java Misc", data : javaMiscCards},
  { key: "javaMultithreding", label: "Java Multithreding", data: javaMultiThredingCards},
  { key: "exceptionMisc", label: "Exception Misc", data : exceptionMiscCards},
  { key: "algorithm", label: "Alagorithm Cards", data: AlgorithmCards},
  { key: "systemdesign", label: "System Design Cards", data: SystemDesignCards},
  { key: "springBootTransaction", label: "String Boot Transaction", data : springBootTransactionalCards},
];

function Home() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const activeTopic = topics.find((t) => t.key === selectedTopic);

  return (
    <div className="home-page">
      <h2>Welcome to MyLearnCards 🎓</h2>
      <p>
        Learn and master a wide range of technologies through interactive
        flashcards. Select a topic below to start learning.
      </p>

      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.key}>
            <button
              className="topic-btn"
              onClick={() => setSelectedTopic(topic.key)}
            >
              {topic.label}
            </button>
          </li>
        ))}
      </ul>

      {activeTopic && (
        <FlashcardModal
          topic={activeTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </div>
  );
}

export default Home;