import sqlFundamentalsHtml from "./cards/sql/sqlFundamentals.html?raw";
import sqlAggregateFunctionHtml from "./cards/sql/sqlAggregateFunction.html?raw";
import filteringAndSortingHtml from "./cards/sql/filteringAndSorting.html?raw";

const sqlCards = [
     {
        question : "SQL Fundamentals",
        answerHtml : sqlFundamentalsHtml
    },
    {
        question : "SQL aggregate function",
        answerHtml: sqlAggregateFunctionHtml
    },
    {
        question : "Filtering and sorting",
        answerHtml : filteringAndSortingHtml
    }
];

export default sqlCards;