import React from 'react'
import '../Styles/ImpactCard.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image2 from '../Images/im-2.jpg' 
import Image3 from '../Images/im-3.jpg' 
import Image5 from '../Images/im-5.jpg' 
import Image6 from '../Images/im-6.jpg' 
import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const data = [
{
    // id: 1,
    image: Image2,
    name: 'ideria Samba ',
    position: 'Lorem Ipsum',
    text: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},
{
    // id: 2,
    image: Image3,
    name: 'Jamal Mahdi',
    position: 'Lorem Ipsum',
    text: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},
{
    // id: 3,
    image: Image5,
    name: 'Mahdi Samba',
    position: 'Lorem Ipsum',
    text: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},
{
    // id: 4,    
    image: Image6,
    name: 'ideria Mahdi',
    position: 'Lorem Ipsum',
    text: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
},

]


function ImapctCard() {

  const [slideNo, setSlideNo] = useState(1)
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:slideNo,
    slidesToScroll: 1,
  };

const [size, setSize] = useState(0)
  useEffect(()=> {
    const updateSize= ()=> {
      setSize (window.innerWidth)
    }; window.addEventListener('resize', updateSize)
    updateSize()
  
  })

useEffect(()=> {
  const getSlideNumber = ()=> {
    if(size > 600 && size < 760 ){
      setSlideNo(2) 
    } else if (size > 760 && size < 900) {
      setSlideNo(3)
    } else if (size > 900) {
      setSlideNo (4)
    } else {
      setSlideNo(1)
    }
    
  };
  getSlideNumber()
})


  return (
    <div className="impact-container">  
      
       <Fade duration={2000}> <div className='impact-card'> 
        <Slider {...settings}>        
          {data.map((item)=> (
            <div className='card-slides'>
              <div className="card-images">
                <img src={item.image} alt="" />
              </div>
              <div className="card-text">
                <h2>{item.name}</h2>
                <h3>{item.position}</h3>
                <p>{item.text}</p>
              </div>
            </div> 
            
          ))}
        </Slider>
        </div></Fade>
      
      
    </div>
 
    
  

  )
}


  
export default ImapctCard