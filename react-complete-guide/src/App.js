import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/User Input/NewExpense';

const init_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2024, 2, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2024, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2024, 5, 12),
  },
];

function App() {

  const [expenses, setExpenses] = useState(init_expenses);

  const enteredDataRender = (enteredExpenseData) => {
    setExpenses((prev_expenses) => {
      return [enteredExpenseData, ...prev_expenses];
    })
  }
  
  return (
    <div className="App">
      <NewExpense onDataEnteredHandler={enteredDataRender} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
