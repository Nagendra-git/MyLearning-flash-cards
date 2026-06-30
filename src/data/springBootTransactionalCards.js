import springBootTransactionHTML from "./cards/springBootTransaction/springBootTransaction.html?raw";
import transactionPropagationHTML from "./cards/springBootTransaction/transactionPropagations.html?raw";
import requiredPropagationHTML from "./cards/springBootTransaction/requiredPropargation.html?raw";
import requiredNewPropagationHTML from "./cards/springBootTransaction/requiredNewPropagation.html?raw";

const springBootTransactionalCards = [
    {
        question : "String Boot Transaction",
        answerHtml : springBootTransactionHTML
    },
    {
        question : "Transaction Propagation",
        answerHtml : transactionPropagationHTML
    },
    {
        question : "REQUIRED Propagation",
        answerHtml : requiredPropagationHTML
    },
    {
        question : "REQUIRED_NEW Propagation",
        answerHtml : requiredNewPropagationHTML
    },

];

export default springBootTransactionalCards;