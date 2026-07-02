import inheritanceHtml from "./cards/java/Inheritance.html?raw";
import abstractClassInterfaceHtml from "./cards/java/AbstractClassInterface.html?raw";
import associationHtml from "./cards/java/Association.html?raw";
import encapsulationHtml from "./cards/java/Encapsulation.html?raw";
import polymorphismHtml from "./cards/java/Polymorphism.html?raw";
import arraysHtml from "./cards/java/Arrays.html?raw";
import interfaceHtml from "./cards/java/Interface.html?raw";

const javaCards = [
  {
    question: "Inheritance(Is-A Relationship)",
    answerHtml: inheritanceHtml
  },
  {
    question: "Association",
    answerHtml: associationHtml
  },
  {
    question: "Abstract Class and Interface",
    answerHtml: abstractClassInterfaceHtml
  },
  {
    question: "Encapsulation",
    answerHtml : encapsulationHtml
  },
  {
    question : "Polymorphism",
    answerHtml : polymorphismHtml
  },
  {
    question: "Arrays",
    answerHtml: arraysHtml
  },
  {
    question : "Interface",
    answerHtml : interfaceHtml
  }
];

export default javaCards;