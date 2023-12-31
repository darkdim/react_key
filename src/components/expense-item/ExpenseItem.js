import './expense-item.css';
import ExpenseDate from '../expense-date';
import Card from '../card';

const ExpenseItem = ({ title, amount, date }) => {

  return (<Card className="expense-item">
    <ExpenseDate date={date} />
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  </Card>);
}

export default ExpenseItem;
