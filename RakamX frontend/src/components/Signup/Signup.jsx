"use client";

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { EvervaultCard } from "../ui/vault-card";
import { BackgroundBeamsWithCollision } from "../ui/backgroundbeams";

export default function SignupPage() {
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('');
  
    try {
      const res = await fetch('https://rakamx-backend.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username, 
          firstname, 
          lastname, 
          email, 
          password 
        })
      });

      if (res.ok) {
        setSuccess("Signup successful!");
        setUsername('');
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/userlanding')

      } else {
        const data = await res.json();
        setError(data.error ? data.error : "Signup failed.");
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
          className="absolute z-0 w-120 h-120 transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />

     
        <form
  onSubmit={(e) => handleSubmit(e)}
  className="p-6 z-10 relative grid grid-cols-2 gap-4">
  

  <input
    aria-label="Username"
    className="p-2 col-span-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
      bg-transparent text-gray-50 backdrop-blur-md"
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
  />
  

  <input
    aria-label="Firstname"
    className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
      bg-transparent text-gray-50 backdrop-blur-md"
    type="text"
    placeholder="Firstname"
    value={firstname}
    onChange={(e) => setFirstname(e.target.value)}
    required
  />


  <input
    aria-label="Lastname"
    className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
      bg-transparent text-gray-50 backdrop-blur-md"
    type="text"
    placeholder="Lastname"
    value={lastname}
    onChange={(e) => setLastname(e.target.value)}
    required
  />

 
  <input
    aria-label="Email"
    className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
      bg-transparent text-gray-50 backdrop-blur-md col-span-2"
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <div className="flex relative">
    <input
      aria-label="Password"
      className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
        bg-transparent text-gray-50 backdrop-blur-md flex-1"
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button
      aria-label="Toggle password visibility"
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>

  
  <div className="flex relative">
    <input
      aria-label="Confirm password"
      className="p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
        bg-transparent text-gray-50 backdrop-blur-md flex-1"
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Confirm Password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
    <button
      aria-label="Toggle confirm password visibility"
      type="button"
      onClick={() => setShowConfirmPassword((prev) => !prev)}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
      {showConfirmPassword ? "Hide" : "Show"}
    </button>
  </div>

  
  {error && <p className="text-red-500 font-semibold mt-2 col-span-2">{error}</p>}
  {success && <p className="text-green-500 font-semibold mt-2 col-span-2">{success}</p>}

  
  <button
    aria-label="Sign up"
    className="rounded-md p-2 font-semibold text-gray-50 
      bg-blue-500 hover:bg-blue-600 
      transition duration-500 col-span-2">
    Sign up
  </button>


  <div className="flex items-center justify-between col-span-2">
    <a
      aria-label="login"
      href="/login"
      className="text-blue-500 hover:underline">
      Already have an account? Login here
    </a>
  </div>


  <button
  aria-label="Signup with Google"
  className="rounded-md p-2 font-semibold text-gray-900 
    bg-gray-50 hover:bg-gray-100 
    transition duration-500 col-span-2 flex items-center justify-center gap-2">
  <img className="h-5" src="/search.png" alt="Google logo" />
  Signup with Google
</button>
</form>

        </div>
      </div>
    
  );
}

