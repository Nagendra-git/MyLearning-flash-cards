import springBootTransactionHTML from "./cards/springBootTransaction/springBootTransaction.html?raw";
import transactionPropagationHTML from "./cards/springBootTransaction/transactionPropagations.html?raw";
import requiredPropagationHTML from "./cards/springBootTransaction/requiredPropargation.html?raw";
import requiredNewPropagationHTML from "./cards/springBootTransaction/requiredNewPropagation.html?raw";
import supportPropagationHTML from "./cards/springBootTransaction/supportsPropagation.html?raw";
import mandatoryPropagationHTML from "./cards/springBootTransaction/mandatoryPropagation.html?raw";
import notSupportPropagationHTML from "./cards/springBootTransaction/notSupportPropagation.html?raw";
import neverPropagationHTML from "./cards/springBootTransaction/neverPropagation.html?raw";
import nestedPropagationHTML from "./cards/springBootTransaction/nestedPropagation.html?raw";
import transactionIsolationHTML from "./cards/springBootTransaction/transactionIsolation.html?raw";
import dirtyReadConcurrencyHTML from "./cards/springBootTransaction/dirtyReadConcurrency.html?raw";
import nonRepeatableReadHTML from "./cards/springBootTransaction/nonRepeatableRead.html?raw";
import phontomReadHTML from "./cards/springBootTransaction/phontomRead.html?raw";
import isolationLevelsHTML from "./cards/springBootTransaction/isolationLevels.html?raw";
import roleBackRulesHTML from "./cards/springBootTransaction/roleBackRules.html?raw";
import transactionMiscHTML from "./cards/springBootTransaction/transactionMisc.html?raw";
import multiTreadTransactionHtml from "./cards/springBootTransaction/multiTreadTransaction.html?raw";

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
    {
        question : "Transaction Isolation",
        answerHtml : transactionIsolationHTML
    },
    {
        question : "Dirty Read",
        answerHtml : dirtyReadConcurrencyHTML
    },
    {
        question : "Non-repeatable Read",
        answerHtml : nonRepeatableReadHTML
    },
    {
        question : "Phantom Read",
        answerHtml : phontomReadHTML
    },
    {
        question : "Isolation Levels",
        answerHtml : isolationLevelsHTML
    },
    {
        question : "RollBack Rules",
        answerHtml : roleBackRulesHTML
    },
    {
        question : "Transaction Misc",
        answerHtml : transactionMiscHTML
    },
    {
        question : "Transaction on Async",
        answerHtml : multiTreadTransactionHtml
    },

];

export default springBootTransactionalCards;