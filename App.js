
import "./App.css";
import Expenses from "./component/Expenses";

function App() {
  
  const expenses = [
    {
      title: "Car Insurance",
      price: 10000,
      expensedate: new Date(2023, 2, 1),
    },
    {
      title: "Bike Insurance",
      price: 50000,
      expensedate: new Date(2023, 2, 1),
    },
    {
      title: "Home Loan",
      price: 20000,
      expensedate: new Date(2023, 2, 1),
    },
    {
      title: "Rent",
      price: 15000,
      expensedate: new Date(2023, 2, 1),
    },
    {
      title: "Other",
      price: 25000,
      expensedate: new Date(2023, 2, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!!!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
