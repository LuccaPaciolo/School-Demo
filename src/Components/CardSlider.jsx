// src/CardSlider.js
import React, { useState } from 'react';
import '../Styles/CardSlider.css';

function CardSlider () {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={prevSlide}>Previous</button>
      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="slide">
              {card.content}
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button" onClick={nextSlide}>Next</button>
    </div>
  );
}

export default CardSlider;
