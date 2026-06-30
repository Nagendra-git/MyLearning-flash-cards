import javaObjectClass from "./cards/javaObject/ObjectClass.html?raw";
import objecttoStringHtml from "./cards/javaObject/toString.html?raw";
import objectequalsHtml from "./cards/javaObject/equals.html?raw";
import objectgetClassHtml from "./cards/javaObject/getClass.html?raw";
import objectcloneHtml from "./cards/javaObject/clone.html?raw";
import objecthahCodeHtml from './cards/javaObject/hashCode.html?raw';

const javaObjectCards = [
    {
        question : "Java Object Class",
        answerHtml : javaObjectClass
    },
    {
        question : "toString()",
        answerHtml : objecttoStringHtml
    },
    {
        question : "equals()",
        answerHtml: objectequalsHtml
    },
    {
        question : "hashCode()",
        answerHtml: objecthahCodeHtml
    },
    {
        question : "getClass()",
        answerHtml : objectgetClassHtml
    },
    {
        question : "clone()",
        answerHtml : objectcloneHtml
    }

]

export default javaObjectCards;