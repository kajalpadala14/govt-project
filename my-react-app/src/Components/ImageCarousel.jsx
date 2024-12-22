import React, { useState, useEffect } from "react";

const App = () => {
  const images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://tinypng.com/images/social/website.jpg",
    "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    "https://cdn.pixabay.com/photo/2023/08/26/15/21/mushroom-8215265_1280.jpg",
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = (direction = 1) => {
    setCurrent((prev) => (prev + direction + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(1), 3000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Images</h2>
      <div className="relative w-4/5 h-[70vh] border-2 border-black">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
          onClick={() => nextSlide(-1)}
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
          onClick={() => nextSlide(1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default App;
