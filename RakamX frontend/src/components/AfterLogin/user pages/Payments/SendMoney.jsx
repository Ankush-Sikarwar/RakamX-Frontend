import React, { useState } from "react";

const MoneyTransfer = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [amount, setAmount] = useState('');
  const [bearer, setBearer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:3000/accounts/transfer', {
        method: 'POST',
        headers: {
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTQwNTBiNzBjNTQyMjkzZmZhZjY0YiIsInVzZXJuYW1lIjoicml5YWthcG9vciIsImlhdCI6MTc1MDMzNzIxNn0.cRULCO4xrSzV2pfpgP4-4Aquw1XH_two_GI23QJjRvc",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, bearer })
      });

      if (res.ok) {
        setSuccess("Payment Done");
        setAmount('');
        setBearer('');
      } else {
        const data = await res.json();
        setError(data.error ? data.error : "Payment failed.");
      }

    } catch (e) {
      setError("Internal server error");
    }
  };

  return (
    <div className="mx-5 p-2 bg-white dark:bg-zinc-900 rounded-md shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
        Transfer Money
      </h2>

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="flex flex-row justify-between">
        <div className="w-1/2 pr-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            To Bank A/c (IMPS / NEFT / RTGS)
          </h3>
          <input
            type="text"
            placeholder="Enter Recipient Name"
            value={bearer}
            onChange={(e) => setBearer(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
          />
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
          />
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            onClick={handleSubmit}
          >
            Send Money
          </button>
        </div>

        <div className="w-1/2 pl-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            UPI Transfer (via VPA or QR)
          </h3>
          <input
            type="text"
            placeholder="Enter UPI ID or Scan QR"
            className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
          />
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
          />
          <button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Send via UPI
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransfer;
