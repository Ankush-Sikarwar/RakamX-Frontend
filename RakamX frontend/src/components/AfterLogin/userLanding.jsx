import React, { useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconSettings,
  IconMenu2,
  IconX,
  IconTransactionRupee,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
// import RakamxPromo from "../Homepage/promo";
// import { Tabs } from "../ui/tabs";

function DashboardLayout({ children, user }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  const navItems = [
    { title: "Home", href: "/userlanding", icon: IconHome },
    { title: "Accounts", href: "/accounts", icon: IconUser },
    { title: "Payments", href: "/userlanding/payments", icon: IconTransactionRupee },
    { title: "Settings", href: "/settings", icon: IconSettings },
  
  ];

  const tabs = [
  {
    title: "Dashboard",
    value: "dashboard",
    content: <div className="bg-white p-4 rounded-lg shadow">This is the Dashboard content.</div>,
  },
  {
    title: "Transactions",
    value: "transactions",
    content: <div className="bg-white p-4 rounded-lg shadow">Here are your Transactions.</div>,
  },
  {
    title: "Settings",
    value: "settings",
    content: <div className="bg-white p-4 rounded-lg shadow">Settings Page</div>,
  },
];


  return (
   
    <div className="relative min-h-screen bg-black text-white">

      <div className="w-full  h-20 flex justify-between items-center px-4 py-8 bg-neutral-900 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-900"
          >
            <IconMenu2 className="h-5 w-5 text-white" />
          </button>

          <span className="font-semibold text-lg">RakamX Dashboard</span>
        </div>

        <div className="p-2 bg-neutral-800 rounded-full">
          <IconUser className="h-5 w-5 text-white" />
        </div>
      </div>

    
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
            className="fixed top-0 left-0 h-full w-64 bg-neutral-950 z-50 shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white hover:text-red-400"
              >
                <IconX />
              </button>
            </div>
            <ul className="space-y-4">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
              <li><a href="#">Option 4</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


      <main className="mt-5 mx-6">
            <Outlet/>


          </main>
     


     

     
      <FloatingDock
        items={navItems}
      desktopClassName="fixed top-0  w-200 mx-100 mt-17 flex justify-center py-1 bg-neutral-900 z-50"

        mobileClassName="fixed bottom-6 right-6"
      />

          
     


    </div>
   
  );
}

export default DashboardLayout;
