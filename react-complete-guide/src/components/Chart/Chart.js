
import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    var expensesAmountArr = props.dataPoints.map((dataPoint) => dataPoint.value);
    var maxExpense = Math.max(...expensesAmountArr);

    return (
        <div className='chart'>
            { props.dataPoints.map((dataPoint) => {
                return <ChartBar 
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxExpense}
                />
            }) }
        </div>
    )
}

export default Chart;