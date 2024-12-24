import React, { useState, useEffect } from "react";

import batisamandir from "../Image/batisamandir.jpg";
import Danteshwari from "../Image/Danteshwari.jpg";
import danteshwarimata from "../Image/danteshwarimata.jpg";
import danteshwaritemple from "../Image/danteshwaritemple.jpg";
import ganesh from "../Image/ganesh.webp";
import ganeshmandir from "../Image/ganeshmandir.jpg";
import IndravatiNational from "../Image/IndravatiNational.jpg";
import IndravatiTigerReserve from "../Image/IndravatiTigerReserve.jpg";
import jharaLawa from "../Image/jharaLawa.jpg";
import MamaBanja from "../Image/MamaBanja.webp";





const ImageCarousel = () => {
  const images = [
    batisamandir,
    Danteshwari,
    danteshwarimata,
    danteshwaritemple,
    ganesh,
    ganeshmandir,
    IndravatiNational,
    IndravatiTigerReserve,
    jharaLawa,
    MamaBanja,
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = (direction = 1) => {
    setCurrent((prev) => (prev + direction + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(1), 3000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center ">
      <div className="relative w-screen h-[70vh]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-screen h-full object-fill transition-opacity duration-500 ${
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

export default ImageCarousel;
