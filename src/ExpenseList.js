import React from 'react';

function ExpenseList({ transactions }) {
  return (
    <div className='font-sans flex justify-center'>
      <div>
        <h2 className="text-2xl text-cyan-900 font-bold mb-4">Transaction History:</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={`mb-2 font-semibold ${transaction.type === 'sent' ? 'text-red-500' : 'text-green-500'}`}>
              -{transaction.title}: ${transaction.amount} ({transaction.type})
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="opacity-0">Align items to left (secret hack by Divi)</h2>
      </div>
    </div>
  );
}

export default ExpenseList;
