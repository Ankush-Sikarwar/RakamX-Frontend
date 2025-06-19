import React from "react";

export default function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
    
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-t-green-500 border-b-black"></div>
    </div>
  );
}
