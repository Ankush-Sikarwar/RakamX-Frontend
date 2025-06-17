"use client";

import { motion } from "framer-motion";



export function HeroSectionOne() {
  console.log("herosectionrenderd")
  return (
    <div
      className="relative px-4 py-10 md:py-20 w-full h-150 mx-auto flex flex-col items-center justify-center bg-black">
      
      {/* Vertical lines with gradient effects */}
      <div className="absolute inset-y-0 left-0 w-px bg-black" />
      <div className="absolute inset-y-0 right-0 w-px bg-black" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-black" />

      {/* Heading */}
      <h1
        className="relative z-10 max-w-4xl text-center text-2xl font-semibold text-gray-200 md:text-4xl lg:text-6xl">
        {"Empowering Your Financial Future with Trust & Innovation"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0)", y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
              className="mr-2 inline-block">
              {word}
            </motion.span>
          ))}
      </h1>

      {/* Paragraph */}
      <motion.p
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3, delay: 0.8}}
        className="relative z-10 max-w-2xl py-4 text-center text-lg font-normal text-gray-400">
        Your trusted partner in banking solutions — from secure savings to smart investments. Join millions who trust us for stability, transparency, and growth.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3, delay: 1}}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          className="w-60 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
          <a href="/signup">Open Account</a>
        </button>
        <button
          className="w-60 rounded-lg border border-gray-400 px-6 py-2 font-semibold text-gray-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800">
          Learn More
        </button>
      </motion.div>

      
    </div>
  );
}
