import systemDesignHtml from "./cards/systemDesign/SystemDesign.html?raw";
import performanceVsScalabilityHtml from "./cards/SystemDesign/PreformanceVsScalability.html?raw";
import latencyVsScalabilityHtml from "./cards/systemDesign/LatencyVsThroughput.html?raw";
import availabilityVsConsistencyHtml from "./cards/systemDesign/AvailabilityVsConsistency.html?raw";
import capTheoremHtml from "./cards/systemDesign/CapTheorem.html?raw";

const systemDesignCards = [
    {
        question : "System Design",
        answerHtml : systemDesignHtml
    },
    {
        question : "Performance Vs Scalability",
        answerHtml: performanceVsScalabilityHtml
    },
    {
        question : "Latency Vs Scalability",
        answerHtml : latencyVsScalabilityHtml
    },
    {
        question : "Availability Vs Consistency",
        answerHtml : availabilityVsConsistencyHtml
    },
    {
        question : "CAP Theorem",
        answerHtml : capTheoremHtml
    }

];

export default systemDesignCards;