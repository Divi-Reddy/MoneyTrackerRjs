import React, { useState } from 'react';

function ExpenseForm({ onAddTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('sent'); // Default to 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || isNaN(amount) || amount <= 0) {
      return;
    }

    const newTransaction = {
      id: new Date().toISOString(),
      title,
      amount: +amount,
      type,
    };

    onAddTransaction(newTransaction);

    setTitle('');
    setAmount('');
    setType('sent'); // Reset type to 'sent' after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className='text-center text-cyan-950'>
        <div className="mb-4 ">
          <label className="mb-4" htmlFor="title">Title:</label>
          <div className='flex justify-center'><input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-1/2 rounded-full border-0 px-4 py-1.5 text-cyan-900 bg-cyan-50 shadow-sm sm:text-sm sm:leading-6"
          /></div>
        </div>
        <div className="mb-4 ">
          <label className="mb-4" htmlFor="amount">Amount:</label>
          <div className='flex justify-center'><input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-1/2 rounded-full border-0 px-4 py-1.5 text-cyan-900 bg-cyan-50 shadow-sm sm:text-sm sm:leading-6"
          /></div>
        </div>
        <div className="mb-4">
          <label className="mb-4">Transaction Type:</label>
          <div className="flex space-x-2 justify-center">
            <button
              type="button"
              className={`bg-blue-500 text-white px-4 py-2 ${type === 'sent' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
              onClick={() => setType('sent')}
            >
              Sent
            </button>
            <button
              type="button"
              className={`bg-green-500 text-white px-4 py-2 ${type === 'received' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
              onClick={() => setType('received')}
            >
              Received
            </button>
          </div>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-1/3 rounded-md">
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
