import { useState } from "react";
import "./App.css";
import ExpenseList from "./component/ExpenseList";
import ExpenseFilter from "./component/ExpenseFilter";
import ExpenseForm from "./component/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      category: "Utility",
      description: "House hold expense",
      amount: 40,
    },

    {
      id: 2,
      category: "Utility",
      description: "test",
      amount: 100,
    },

    {
      id: 3,
      category: "Groceries",
      description: "House hold expense",
      amount: 100,
    },

    {
      id: 4,
      category: "Groceries",
      description: "House hold expense",
      amount: 100,
    },
    {
      id: 5,
      category: "Tour",
      description: "Travel expense",
      amount: 200,
    },
  ]);

  //remove an item from array
  const deleteItem = (id) => {
    setExpenses(expenses.filter((e) => e.id != id));
  };

  //filter using category

  const [selectedCategory, setSelectedCategory] = useState("");

  const filterCategory = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  return (
    <>
      <div className="max-w-[800px] mx-auto p-4 rounded-xl mt-10">
        <ExpenseForm addExpense={addExpense} />
        <div className="max-w-[800px] mx-auto border-lime-400 border-2 p-4 rounded-xl mt-10">
          <ExpenseFilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
          <ExpenseList expenses={filterCategory} onDelete={deleteItem} />
        </div>
      </div>
    </>
  );
}

export default App;
