import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Load transactions from local storage on mount
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);

      // Calculate total amount from stored transactions
      const storedTotalAmount = storedTransactions.reduce(
        (total, transaction) => total + (transaction.type === 'sent' ? -transaction.amount : transaction.amount),
        0
      );
      setTotalAmount(storedTotalAmount);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);

    // Calculate updated total amount
    const updatedTotalAmount = updatedTransactions.reduce(
      (total, transaction) => total + (transaction.type === 'sent' ? -transaction.amount : transaction.amount),
      0
    );
    setTotalAmount(updatedTotalAmount);

    // Store transactions in local storage
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl text-center text-cyan-900 font-bold mb-8">Money Trackr</h1>

      <p className="text-4xl text-center text-cyan-900 font-bold mb-8">
        Total Amount: 
        <span className={`text-4xl text-center font-bold mb-8 ${totalAmount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {totalAmount >= 0 ? `$${totalAmount}` : `-$${Math.abs(totalAmount)}`}
        </span>
      </p>

      <ExpenseForm onAddTransaction={addTransaction} />
      <ExpenseList transactions={transactions} />
    </div>
  );
}

export default App;
