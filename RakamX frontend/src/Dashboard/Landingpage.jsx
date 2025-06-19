import React, { useState } from "react";

function LandingPage() {
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isPricingOpen, setPricingOpen] = useState(false);

  return (
    <div className="p-10">
      <h1>Welcome to RakamX</h1>


      <button
        onClick={() => setFeaturesOpen(true)}
        className="bg-blue-500 text-gray-50 px-4 py-2 mr-2 rounded-md">
        Features
      </button>

      <button
        onClick={() => setPricingOpen(true)}
        className="bg-green-500 text-gray-50 px-4 py-2 mr-2 rounded-md">
        Pricing
      </button>

  
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-gray-900 text-gray-50 transform ${
          isFeaturesOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out p-5 shadow-lg z-50`}
      >
        <h2>Features</h2>
        <p>Here’s a list of our top features...</p>
        <button
          onClick={() => setFeaturesOpen(false)}
          className="bg-gray-700 px-4 py-2 mt-4 rounded-md">
          Close
        </button>
      </div>

     
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-gray-900 text-gray-50 transform ${
          isPricingOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out p-5 shadow-lg z-50`}
      >
        <h2>Pricing</h2>
        <p>Here’s a pricing table for our plans...</p>
        <button
          onClick={() => setPricingOpen(false)}
          className="bg-gray-700 px-4 py-2 mt-4 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
