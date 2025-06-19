

import {Tabs} from "../../../ui/tabs"
import {
  IconDashboard,
  IconSettings,
  IconFileInvoice,
} from "@tabler/icons-react";

function Home () {


   const tabs = [
  {
    title: "Dashboard",
    value: "dashboard",
    content: (
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800 space-y-4">
        <div className="flex items-center gap-3">
          <IconDashboard className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">Dashboard Overview</h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300">
          Welcome back! Here’s a quick summary of your recent activities and system status.
        </p>
        <ul className="list-disc list-inside text-sm text-neutral-500 dark:text-neutral-400 pl-2">
          <li>System uptime: 99.97%</li>
          <li>Last login: 2 hours ago</li>
          <li>3 pending approvals</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Transactions",
    value: "transactions",
    content: (
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800 space-y-4">
        <div className="flex items-center gap-3">
          <IconFileInvoice className="h-6 w-6 text-green-500" />
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">Recent Transactions</h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300">
          Here is a snapshot of your most recent financial transactions.
        </p>
        <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-1">
          <li>💸 Sent ₹2,000 to Akash • Jun 17</li>
          <li>✅ Received ₹5,500 from UPI • Jun 16</li>
          <li>💰 Added ₹1,000 to wallet • Jun 15</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Settings",
    value: "settings",
    content: (
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-800 space-y-4">
        <div className="flex items-center gap-3">
          <IconSettings className="h-6 w-6 text-purple-500" />
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">Preferences & Settings</h2>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300">
          Manage your profile, notification preferences, and system settings.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <button className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Edit Profile</button>
          <button className="px-3 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Privacy</button>
        </div>
      </div>
    ),
  },
];

    return (
        <div>
               <Tabs
                
                    tabs={tabs}
                    containerClassName="mb-4"
                    tabClassName="text-sm font-medium"
                    activeTabClassName="bg-blue-200 dark:bg-blue-800"
                    contentClassName="text-lg"
                  />

        </div>

    )
}
export default Home;