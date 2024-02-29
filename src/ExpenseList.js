import React from 'react';

function ExpenseList({ transactions }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={`mb-2 ${transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'}`}>
            {transaction.title}: ${transaction.amount} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
