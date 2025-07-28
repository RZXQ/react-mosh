interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export default function ExpenseList({ expenses, onDelete }: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-error"
                onClick={() => {
                  onDelete(expense.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>
            {expenses.reduce((total, expense) => total + expense.amount, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
