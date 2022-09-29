import React from "react";

import Chart from "../Chart/Chart";

// To use the Chart and pass in the data points 
const ExpensesChart = props => { // get the filtered expenses as a prop from Expense component

    // This chartDataPoints is Array which has objects because we expect every  data point to be object in Chart Compo
    const chartdataPoints = [
        { label: 'Jan', value:0 },
        { label: 'Feb', value:0 },
        { label: 'Mar', value:0 },
        { label: 'Apr', value:0 },
        { label: 'May', value:0 },
        { label: 'Jun', value:0 },
        { label: 'Jul', value:0 },
        { label: 'Aug', value:0 },
        { label: 'Sep', value:0 },
        { label: 'Oct', value:0 },
        { label: 'Nov', value:0 },
        { label: 'Dec', value:0 },
    ];


    // For-of文　-> props.expenses is an array, so we use for-of loop
    // For-in文　-> オブジェクトの中身を効率よく抽出できる。for文との違いは、初期化やループ条件の記述をしなくても、中身のそれぞれを抽出できることです。
    for(const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
        // Look at the filtered expenses all though the year -> Sum up the expenses for all the different months -> assign them to the data points.
        chartdataPoints[expenseMonth].value += expense.amount
    }
    return <Chart dataPoints = {chartdataPoints}/>
}

export default ExpensesChart;