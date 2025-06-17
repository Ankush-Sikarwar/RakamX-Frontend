import React, { useEffect, useState, useRef } from "react";

export default function ScrollingCardCarousel({ cards = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Auto-rotate cards
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === cards.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [cards.length]);

  // Stop rotation on hover
  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () =>
    (intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === cards.length - 1 ? 0 : prev + 1
      );
    }, 3000));

  return (
    <div
      ref={carouselRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="dark:bg-gray-900 p-10 rounded-md overflow-x-auto scrollbar-none"
      style={{ perspective: "1000px" }}>
      <ul
        className="flex gap-6 transform-gpu transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
        {cards.map((item, index) => (
          <li
            key={item.id}
            className="flex-none w-72 p-6 rounded-md shadow-md dark:bg-gray-800 transform transition-transform duration-500 ease-in-out"
            style={{ transform: `rotateY(${(index - currentIndex) * 20}deg)` }}>
            <h3 className="dark:text-gray-50 font-semibold text-lg">
              {item.title}
            </h3>
            <p className="dark:text-gray-400 mt-4">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

