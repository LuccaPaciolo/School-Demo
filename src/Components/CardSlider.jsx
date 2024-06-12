// src/CardSlider.js
import React, { useState } from 'react';
import '../Styles/CardSlider.css';
import Image2 from '../Images/im-2.jpg' 
import Image3 from '../Images/im-3.jpg' 
import Image5 from '../Images/im-5.jpg' 
import Image6 from '../Images/im-6.jpg' 

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


var data = [

{
    // id: 1,
    image: Image2,
    name: 'ideria Samba ',
    position: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},
{
    // id: 2,
    image: Image3,
    name: 'Jamal Mahdi',
    position: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},
{
    // id: 3,
    image: Image5,
    name: 'Mahdi Samba',
    position: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},
{
    // id: 4,    
    image: Image6,
    name: 'ideria Mahdi',
    position: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},

]


export default CardSlider;
