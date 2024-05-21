import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';


function Expenses (props) {

    const [filteredYear, setFilteredYear] = useState('2024');

    const onSelectHandler = (yearValue) => {
        console.log(yearValue);
        setFilteredYear(yearValue);
    }

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear() === filteredYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onSelect={onSelectHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;