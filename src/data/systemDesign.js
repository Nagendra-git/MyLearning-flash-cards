import systemDesignHtml from "./cards/systemDesign/SystemDesign.html?raw";
import performanceVsScalabilityHtml from "./cards/systemDesign/PreformanceVsScalability.html?raw";
import latencyVsScalabilityHtml from "./cards/systemDesign/LatencyVsThroughput.html?raw";
import availabilityVsConsistencyHtml from "./cards/systemDesign/AvailabilityVsConsistency.html?raw";
import capTheoremHtml from "./cards/systemDesign/CapTheorem.html?raw";
import distributedSystemHtml from "./cards/systemDesign/DistributedSystem.html?raw";
import consistencyPatternsHtml from "./cards/systemDesign/ConsistencyPatterns.html?raw";
import availabilityHtml from "./cards/systemDesign/Availability.html?raw";
import availabilityPatternsHtml from "./cards/systemDesign/AvailabilityPatterns.html?raw";

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
    },
    {
        question : "Distribution System",
        answerHtml : distributedSystemHtml
    },
    {
        question : "Consistency Patterns",
        answerHtml : consistencyPatternsHtml
    },
    {
        question : "Availability",
        answerHtml : availabilityHtml
    },
    {
        question : "Availability Patterns",
        answerHtml : availabilityPatternsHtml
    }

];

export default systemDesignCards;