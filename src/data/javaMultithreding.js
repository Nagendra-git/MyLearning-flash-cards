import threadFundamentalsHtml from "./cards/javaMultithreads/threadFundamentals.html?raw";
import multithreadingHtml from "./cards/javaMultithreads/multithreading.html?raw";
import threadLifeCycleHtml from "./cards/javaMultithreads/threadLifeCycle.html?raw";
import userThreadVsDaemonThreadHtml from "./cards/javaMultithreads/userThreadVsDaemonThread.html?raw";
import creatingThreadsHtml from "./cards/javaMultithreads/creatingThreads.html?raw";
import callableHtml from "./cards/javaMultithreads/callable.html?raw";
import threadMethodsHtml from "./cards/javaMultithreads/threadMethods.html?raw";


const javaMultiThredingCards = [
    {
        question : "Thread Fundamentals",
        answerHtml : threadFundamentalsHtml
    },
    {
        question : "Multithreading in Java",
        answerHtml: multithreadingHtml
    },
    {
        question : "Thread Life Cycle",
        answerHtml : threadLifeCycleHtml
    },
    {
        question : "Thread Misc",
        answerHtml: userThreadVsDaemonThreadHtml
    },
    {
        question: "Creating Threads",
        answerHtml: creatingThreadsHtml
    },
    {
        question : "Callable and Feature",
        answerHtml : callableHtml
    },
    {
        question : "Thread Methods",
        answerHtml : threadMethodsHtml
    }
];

export default javaMultiThredingCards;