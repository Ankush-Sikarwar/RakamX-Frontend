"use client";

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { EvervaultCard } from "../ui/vault-card";
import { BackgroundBeamsWithCollision } from "../ui/backgroundbeams";
import { CanvasRevealEffect} from "../ui/canvas-reveal"

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');
  
    try {
      const res = await fetch('https://rakamx-backend.onrender.com/user/signin', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        setSuccess("Login successful!");
        setEmail('');
        setPassword('');
        navigate('/userlanding');
      } else {
        const data = await res.json();
        setError(data.error ? data.error : "Login failed.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  }

  return (
    <div
      className="absolute top-0 left-0 min-h-screen -z-50 h-96 md:h-[40rem] 
      bg-gradient-to-b from-gray-900 to-black flex items-center 
      w-full justify-center overflow-hidden">

      <BackgroundBeamsWithCollision/>

    
      <div className="flex items-center justify-center relative group">
     
        <EvervaultCard
          text=" "
          className="absolute z-0 w-95 h-90 transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
     

        
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-4 p-6 z-10 relative">
          <input
            aria-label="email"
            className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
              bg-transparent text-gray-50 backdrop-blur-md"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            aria-label="password"
            className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
              bg-transparent text-gray-50 backdrop-blur-md"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

       
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {success && <p className="text-green-500 font-semibold mt-2">{success}</p>}

          <button
            aria-label="login"
            className="rounded-md p-2 font-semibold text-gray-50 
              bg-blue-500 hover:bg-blue-600 
              transition duration-500">
            Login
          </button>

          <div className="flex items-center justify-between">
            <a
              aria-label="get started"
              href="/signup"
              className="text-blue-500 hover:underline">
              Don’t have an account? Get started with us
            </a>
          </div>
          <button
              aria-label="Signup with Google"
  className="rounded-md p-2 font-semibold text-gray-900 
    bg-gray-50 hover:bg-gray-100 
    transition duration-500 col-span-2 flex items-center justify-center gap-2">
  <img className="h-5" src="/search.png" alt="Google logo" />
  Login with Google
</button>


         </form>
      </div>
    </div>
  );
}

