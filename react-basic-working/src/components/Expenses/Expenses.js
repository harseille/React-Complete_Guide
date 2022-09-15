import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;

  // const [filteredExpenses, setfilteredExpenses] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // setfilteredExpenses(expenses.filter(({ date }) => date.getFullYear() === selectedYear));
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
