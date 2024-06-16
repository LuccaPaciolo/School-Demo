import React from 'react'
import '../Styles/ImpactSlider.css'
import ImpactData from '../Data/ImpactData.js'
import ImpactCard from '../Components/ImpactCard.jsx'

function ImpactSlider() {
  
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

      {callCardData}
       
    </div>
  
  )
}

export default ImpactSlider