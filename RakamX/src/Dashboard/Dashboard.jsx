import React from 'react';

import {
  ChartBarIcon,
  CreditCardIcon,
  DocumentTextIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CurrencyDollarIcon,
  Bars3Icon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export default function FinanceDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">FinBank</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="px-6 py-3 hover:bg-blue-50 flex items-center cursor-pointer">
              <CurrencyDollarIcon className="h-5 w-5 text-gray-600" />
              <span className="ml-3 text-gray-700">Dashboard</span>
            </li>
            <li className="px-6 py-3 hover:bg-blue-50 flex items-center cursor-pointer">
              <CreditCardIcon className="h-5 w-5 text-gray-600" />
              <span className="ml-3 text-gray-700">Accounts</span>
            </li>
            <li className="px-6 py-3 hover:bg-blue-50 flex items-center cursor-pointer">
              <ArrowDownIcon className="h-5 w-5 text-gray-600" />
              <span className="ml-3 text-gray-700">Expenses</span>
            </li>
            <li className="px-6 py-3 hover:bg-blue-50 flex items-center cursor-pointer">
              <ArrowUpIcon className="h-5 w-5 text-gray-600" />
              <span className="ml-3 text-gray-700">Income</span>
            </li>
            <li className="px-6 py-3 hover:bg-blue-50 flex items-center cursor-pointer">
              <DocumentTextIcon className="h-5 w-5 text-gray-600" />
              <span className="ml-3 text-gray-700">Reports</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4">
          <div className="flex items-center">
            <Bars3Icon className="h-6 w-6 text-gray-600 mr-4 cursor-pointer" />
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          <UserCircleIcon className="h-8 w-8 text-gray-600 cursor-pointer" />
        </header>

        {/* Content */}
        <main className="p-6 overflow-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-5 flex items-center">
              <CurrencyDollarIcon className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Balance</p>
                <p className="text-xl font-bold text-gray-800">₹4,82,300</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex items-center">
              <ArrowUpIcon className="h-8 w-8 text-green-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Monthly Income</p>
                <p className="text-xl font-bold text-green-600">+ ₹84,000</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex items-center">
              <ArrowDownIcon className="h-8 w-8 text-red-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Monthly Expenses</p>
                <p className="text-xl font-bold text-red-600">– ₹58,200</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-5 flex items-center">
              <ChartBarIcon className="h-8 w-8 text-blue-500" />
              <div className="ml-4">
                <p className="text-sm text-gray-500">Net Profit</p>
                <p className="text-xl font-bold text-gray-800">₹25,800</p>
              </div>
            </div>
          </div>

          {/* Transactions & Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
              <ul className="divide-y divide-gray-200">
                {[
                  { desc: 'Amazon Shopping', amount: '- ₹2,200' },
                  { desc: 'Salary Credit', amount: '+ ₹70,000' },
                  { desc: 'Electricity Bill', amount: '- ₹1,400' },
                  { desc: 'Freelance Project', amount: '+ ₹14,000' },
                ].map((tx, idx) => (
                  <li key={idx} className="py-3 flex justify-between">
                    <span className="text-gray-700">{tx.desc}</span>
                    <span className={`${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'} font-medium`}>{tx.amount}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Spending Overview</h3>
              <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Chart Component Here
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
