import React from "react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
     
        <div>
          <h2 className="text-gray-50 font-semibold mb-4">RakamX</h2>
          <p>RakamX - Your trusted financial institution. Providing financial services with honesty, security, and care.</p>
        </div>

    
        <div>
          <h3 className="text-gray-50 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">Home</a></li>
            <li><a href="#" className="hover:text-gray-100">About</a></li>
            <li><a href="#" className="hover:text-gray-100">Services</a></li>
            <li><a href="#" className="hover:text-gray-100">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-gray-50 font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-100">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-100">Security</a></li>
            <li><a href="#" className="hover:text-gray-100">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-100">Terms of Service</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-gray-50 font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>RakamX, Town 8, Marathalli</li>
            <li>Bangalore, KA 560034</li>
            <li>RakamX@gmail.com</li>
            <li>+91-8516827100</li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-7 text-center ">
        <p> © {new Date().getFullYear()} RakamX. All rights reserved.</p>
      </div>
    </footer>
  );
}
