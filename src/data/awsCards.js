import awsIntoductionHtml from "./cards/aws/awsIntoduction.html?raw";
import iaaSvsPaaSvsSaaSHtml from "./cards/aws/iaaSvsPaaSvsSaaS.html?raw";
import publicCloudvsPrivateCloudvsHybridCloudHtml from "./cards/aws/publicCloudvsPrivateCloudvsHybridCloud.html?raw";
import awsGlobalInfrastructureHtml from "./cards/aws/awsGlobalInfrastructure.html?raw";
import awsSharedResponsibilityModelHtml from "./cards/aws/awsSharedResponsibilityModel.html?raw";
import awsWellArchitectedFrameworkHtml from "./cards/aws/awsWellArchitectedFramework.html?raw";

const awsCards = [
        {
            question: "Introduction to AWS",
            answerHtml: awsIntoductionHtml
        },
        {
            question : "IaaS vs PaaS vs SaaS",
            answerHtml : iaaSvsPaaSvsSaaSHtml
        },
        {
            question : "Public Cloud vs Private Cloud vs Hybrid Cloud",
            answerHtml: publicCloudvsPrivateCloudvsHybridCloudHtml
        },
        {
            question : "AWS Global Infrastructure",
            answerHtml : awsGlobalInfrastructureHtml
        },
        {
            question : "AWS Shared Responsibility Model",
            answerHtml: awsSharedResponsibilityModelHtml
        },
        {
            question : "AWS Well-Architected Framework",
            answerHtml : awsWellArchitectedFrameworkHtml
        }
]

export default awsCards;