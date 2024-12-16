'use client';

import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const slides = [
    {
      src: '/pic/kid2.avif',
      label: 'First slide',
      description: 'Some  first slide.',
    },
    {
      src: '/pic/kid1.avif',
      label: 'Second slide',
      description: 'Some second slide.',
    },
    {
      src: '/pic/kid3.jpg',
      label: 'Third slide',
      description: 'Some third slide.',
    },
    {
      src: '/pic/kid8.jpg',
      label: 'Fourth slide',
      description: 'Somefourth slide.',
    },
    {
      src: '/pic/kid10.jpg',
      label: 'Fifth slide',
      description: 'Some fifth slide.',
    },
    {
      src: '/pic/kid6.jpg',
      label: 'sixth slide',
      description: 'Some sixth slide.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
<div>
  {/* Carousel */}
  <div className="relative w-full w-[90%] mx-auto h-auto shadow-lg rounded-xl overflow-hidden">
    {/* Indicators */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-blue-500 scale-110' : 'bg-gray-300'} transition-all duration-300 ease-in-out`}
        />
      ))}
    </div>

    {/* Slides */}
    <div style={{ height: '65vh' }} className="relative overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100 z-10' : 'opacity-60 z-0'} transition-all duration-1000 ease-in-out`}
        >
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-transform duration-1000 ease-in-out ${currentIndex === index ? 'scale-100' : 'scale-90 blur-sm'}`}
          />
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${currentIndex === index ? 'from-black via-transparent to-transparent' : 'from-black via-transparent to-black'} p-6 text-white`}>
            <h5 className="text-xl font-semibold">{slide.label}</h5>
            <p className="text-sm mt-2">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <button
      onClick={goToPrevious}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-60 rounded-full p-4 z-10 transition-all duration-300 ease-in-out hover:bg-opacity-80"
    >
      &#9664;
    </button>
    <button
      onClick={goToNext}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-60 rounded-full p-4 z-10 transition-all duration-300 ease-in-out hover:bg-opacity-80"
    >
      &#9654;
    </button>
  </div>
</div>

  );
};

export default Carousel;
