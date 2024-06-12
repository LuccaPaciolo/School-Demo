import React from 'react'
import '../Styles/ImpactSlider.css'
import ImpactData from '../Data/ImpactData.js'
import ImpactCard from '../Components/ImpactCard.jsx'
import RightArrow from '../Images/arrow-narrow-right.svg'
import LeftArrow from '../Images/arrow-narrow-left.svg'
import { useState } from 'react'

function ImpactSlider() {

  const [slide, setSlide] = useState(0)

  // const backSlide = ()=> {
  //   setSlide ((prevSlide) => (prevSlide + 1)% ImpactData.length)
  // }

  // const frontSlide = ()=> {
  //   setSlide ((prevSlide)=>(prevSlide - 1 + ImpactData.length)% ImpactData.length)
  // }

  const callCardData = ImpactData.map((item)=> {
    return (
      <div>
         <ImpactCard key = {item}
         {...item}
         />
      </div>
    )
  })

 
  return (
    
    <div className='slider-container'>  
         

      {/* <div className="slider">
      <div className="slider-arrows">
            <img onClick={frontSlide} src={LeftArrow} alt="left-arrow" />
         
        </div> 
        <div
            className="slider-track"
            style={{ transform:`translateX(-${slide * 100}%)` }}
          >
           {callCardData}
           
          </div>
          <img onClick={backSlide} src={RightArrow} alt="right-arrow"/>
            
      </div> */}
      {callCardData}
       
    </div>
  
  )
}

export default ImpactSlider