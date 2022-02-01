import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={props.onAddExpense} />
    </div>
  );
};

export default NewExpense;
