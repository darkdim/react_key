import './expenses.css';
import ExpenseItem from '../expense-item';
import Card from '../card';

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} ></ExpenseItem>;
      })}
    </Card>
  );
}

export default Expenses;
