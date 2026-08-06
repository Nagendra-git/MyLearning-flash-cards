import sqlMiscsHtml from "./cards/sql/sqlMiscs.html?raw";
import sqlBasicsHtml from "./cards/sql/sqlBasics.html?raw";
import sqlAggregateFunctionHtml from "./cards/sql/sqlAggregateFunction.html?raw";
import filteringAndSortingHtml from "./cards/sql/filteringAndSorting.html?raw";
import ddlStatementsHtml from "./cards/sql/ddlStatements.html?raw";

const sqlCards = [
    {
        question : "DDL Statements",
        answerHtml : ddlStatementsHtml
    },
    {
        question : "SQL Basics",
        answerHtml : sqlBasicsHtml
    },
    {
        question : "SQL Miscs",
        answerHtml : sqlMiscsHtml
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