import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css';


function Expenses (props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const onSelectHandler = (yearValue) => {
        console.log(yearValue);
        setFilteredYear(yearValue);
    }

    return (
        <div>
            
            <Card className='expenses'>
                <ExpensesFilter onSelect={onSelectHandler} />

                { props.items.map((expense) => {
                    return <ExpenseItem
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                    />
                }) }

            </Card>
        </div>
    )
}

export default Expenses;