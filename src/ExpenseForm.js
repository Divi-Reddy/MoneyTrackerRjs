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
      <div className="flex space-x-4">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="border p-2">
            <option value="sent">Sent</option>
            <option value="received">Received</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Add Transaction
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
