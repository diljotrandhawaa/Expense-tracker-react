import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [formIsEditing, setIsEditing] = useState(true);

    const onEnteredExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
            // id: 'e' + Math.floor(Math.random() * 10).toString()
        }
        props.onDataEnteredHandler(expenseData);
        setIsEditing(false);
    }

    const new_expense_handler = () => {
        setIsEditing(true);
    }

    return (
        <div className='new-expense'>
            { !formIsEditing && <button onClick={new_expense_handler}>Add New Expense</button> }
            { formIsEditing && <ExpenseForm onDataEntered={onEnteredExpenseData} /> } 
        </div>
    )
};

export default NewExpense;