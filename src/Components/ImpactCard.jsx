import React from 'react'
import '../Styles/ImpactCard.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image2 from '../Images/im-2.jpg' 
import Image3 from '../Images/im-3.jpg' 
import Image5 from '../Images/im-5.jpg' 
import Image6 from '../Images/im-6.jpg' 


const data = [
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

function ImapctCard() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="impact-container">  
      
        <div className='impact-card'> 
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
        </div>
      
      
    </div>
 
    
  

  )
}


  
export default ImapctCard