import React from 'react';
import image from "../assets/scrolingcardsview/graph.png";

export default function Image() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img
        src={image}
        alt="Full view"
        className="max-w-full max-h-full object-contain rounded shadow-lg"
      />
    </div>
  );
}
