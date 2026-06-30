import springBootTransactionHTML from "./cards/springBootTransaction/springBootTransaction.html?raw";
import transactionPropagationHTML from "./cards/springBootTransaction/transactionPropagations.html?raw";
import requiredPropagationHTML from "./cards/springBootTransaction/requiredPropargation.html?raw";
import requiredNewPropagationHTML from "./cards/springBootTransaction/requiredNewPropagation.html?raw";
import supportPropagationHTML from "./cards/springBootTransaction/supportsPropagation.html?raw";
import mandatoryPropagationHTML from "./cards/springBootTransaction/mandatoryPropagation.html?raw";
import notSupportPropagationHTML from "./cards/springBootTransaction/notSupportPropagation.html?raw";
import neverPropagationHTML from "./cards/springBootTransaction/neverPropagation.html?raw";
import nestedPropagationHTML from "./cards/springBootTransaction/nestedPropagation.html?raw";

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
    {
        question : "SUPPORTS Propagation",
        answerHtml : supportPropagationHTML
    },
    {
        question : "MANDATORY Propagation",
        answerHtml : mandatoryPropagationHTML
    },
    {
        question : "NOT_SUPPORTS Propagation",
        answerHtml : notSupportPropagationHTML
    },
    {
        question : "NEVER Propagation",
        answerHtml : neverPropagationHTML
    },
    {
        question : "NESTED Propagation",
        answerHtml : nestedPropagationHTML
    },
];

export default springBootTransactionalCards;