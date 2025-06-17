import React, { useState } from "react";

function DashboardLayout({ children, user }) {
  // Manage visibility for sidebar and profile menu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        aria-label="Sidebar"
        className={`fixed top-0 left-0 bottom-0 transform ${
          isSidebarOpen ? "translate-x-0" :"-translate-x-full"
        } transition-all duration-300 ease-in-out w-64 bg-gray-900 text-gray-50 p-4 shadow-lg z-50`}
      >
        <nav aria-label="Primary">
          <ul className="flex flex-col gap-4">
            <li><a href="#" className="hover:bg-gray-700 p-2 rounded-md">Dashboard</a></li>
            <li><a href="#" className="hover:bg-gray-700 p-2 rounded-md">Reports</a></li>
            <li><a href="#" className="hover:bg-gray-700 p-2 rounded-md">Settings</a></li>
            <li><a href="#" className="hover:bg-gray-700 p-2 rounded-md">Support</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header aria-label="Top Navbar" className="bg-gray-900 text-gray-50 p-4 shadow-md flex items-center justify-between">
          {/* Left side (Menu) */}
          <button aria-label="Open Sidebar" onClick={() => setIsSidebarOpen((prev) => !prev)} className="md:hidden mr-4">
            {/* Hamburger icon */}
            ☰
          </button>

          {/* Right side (Profile) */}
          <div className="relative">
            <button aria-label="Open Profile Menu" onClick={() => setIsProfileMenuOpen((prev) => !prev)} 
              className="flex items-center gap-2">
              <img src={user.avatar} alt={`${user.name} avatar`} className="rounded-full w-10 h-10" />
              <span className="font-semibold">{user.name}</span>
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <ul 
                aria-label="Profile Menu"
                role="menu"
                className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-md py-2">
                <li role="none"><a role="menuitem" tabIndex="0" className="block px-4 py-2 hover:bg-gray-700">View Profile</a></li>
                <li role="none"><a role="menuitem" tabIndex="0" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
                <li role="none"><a role="menuitem" tabIndex="0" className="block px-4 py-2 hover:bg-gray-700">Notifications</a></li>
                <li role="none"><a role="menuitem" tabIndex="0" className="block px-4 py-2 hover:bg-gray-700">Logout</a></li>
              </ul>
            )}

          </div>

        </header>

        {/* Main Content */}
        <main aria-label="Main Content" className="flex-1 p-6 overflow-auto">
          {children}
        </main>

        {/* Footer (Optionally) */}
        {/* <footer aria-label="Footer" className="p-4 bg-gray-900 text-gray-50">
          Footer content here
        </footer>*/}
      </div>
    </div>
  );
}

export default DashboardLayout;

// Example usage:
// <DashboardLayout user={{name:'Ankush Sikarwar',avatar:'https://portfolio-ankush2210.netlify.app/assets/hero/heroImage.png'}}>
//   {/* Your main content here */}
// </DashboardLayout>
