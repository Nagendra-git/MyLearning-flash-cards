import systemDesignHtml from "./cards/systemDesign/SystemDesign.html?raw";
import performanceVsScalabilityHtml from "./cards/systemDesign/PreformanceVsScalability.html?raw";
import latencyVsThroughputHtml from "./cards/systemDesign/LatencyVsThroughput.html?raw";
import availabilityVsConsistencyHtml from "./cards/systemDesign/AvailabilityVsConsistency.html?raw";
import capTheoremHtml from "./cards/systemDesign/CapTheorem.html?raw";
import distributedSystemHtml from "./cards/systemDesign/DistributedSystem.html?raw";
import consistencyPatternsHtml from "./cards/systemDesign/ConsistencyPatterns.html?raw";
import availabilityHtml from "./cards/systemDesign/Availability.html?raw";
import availabilityPatternsHtml from "./cards/systemDesign/AvailabilityPatterns.html?raw";
import backgroundJobsHtml from "./cards/systemDesign/BackgroundJobs.html?raw";
import domainNameSystemHtml from "./cards/systemDesign/domainNameSystem.html?raw";
import contentDeliveryNetworkHtml from "./cards/systemDesign/contentDeliveryNetwork.html?raw";
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
        question : "Latency Vs Throughput",
        answerHtml : latencyVsThroughputHtml
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
    },
    {
        question : "Background Jobs",
        answerHtml : backgroundJobsHtml
    },
    {
        question : "Domain Name System (DNS)",
        answerHtml : domainNameSystemHtml
    },
    {
        question : "Content Delivery Network (CDN)",
        answerHtml : contentDeliveryNetworkHtml
    }

];

export default systemDesignCards;