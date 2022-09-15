import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses} />
    </Card>
  );
};

export default Expenses;
