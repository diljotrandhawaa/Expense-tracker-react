
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const onEnteredExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
            // id: 'e' + Math.floor(Math.random() * 10).toString()
        }

        props.onDataEnteredHandler(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onDataEntered={onEnteredExpenseData} />
        </div>
    )
};

export default NewExpense;