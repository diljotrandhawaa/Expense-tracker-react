import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setEnteredTitle] = useState('');
    const [amount, setEnteredAmount] = useState('');
    const [date, setEnteredDate] = useState('');

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
    const maxDate = getCurrentDate();

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        }

        props.onDataEntered(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={title} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={date} min='2019-01-01' max={maxDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Cancel</button>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
    )
};

export default ExpenseForm;