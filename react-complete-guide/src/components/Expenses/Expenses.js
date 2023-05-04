import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css';

function Expenses (props) {

    const onSelectHandler = (yearValue) => {
        console.log(yearValue);
    }

    return (
        <div>
            <ExpensesFilter onSelect={onSelectHandler} />
            <Card className='expenses'>
                <ExpenseItem
                title={props.items[0].title} 
                amount={props.items[0].amount} 
                date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date}
                />
            </Card>
        </div>
    )
}

export default Expenses;