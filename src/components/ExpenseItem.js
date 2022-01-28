import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 0, 12);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.65;

  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
