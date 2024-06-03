import React, { useState } from 'react'
import LandingPage from '../Components/LandingPage.jsx' 
import Thesis from '../Components/Thesis.jsx' 
import ThesisCardData from '../Data/ThesisCardData.js'
import ThesisCard from '../Components/ThesisCard.jsx'
import RightArrow from '../Images/arrow-narrow-right.svg'
import LeftArrow from '../Images/arrow-narrow-left.svg'
import '../Styles/ThesisCard.css'
import '../Styles/ImpactCard.css'
import ImpactData from '../Data/ImpactData.js'
import ImpactCard from '../Components/ImpactCard.jsx'


function Home() {

  const CallThesisData = ThesisCardData.map(item => {
    return (
      <div>
         <ThesisCard
          key={item}
          {...item}
         />
      </div>
    )
  })

  const CallImpactData = ImpactData.map (item => {
    return (
      <div>
          <ImpactCard key={item}
          {...item}/>
      </div>
    )
  })

  const [slide, setSlide] = useState(0)

  const backSlide = ()=> {
    setSlide (slide + 1)
  }

  const frontSlide = ()=> {
    setSlide (slide - 1)
  }

  console.log(slide);
  return (
    <div className='home-container'>
        <LandingPage/>
        <Thesis/>
        <div className="thesis-section">
          <h3 className='thesis-card-text'>Bagaiman <span>TESIS</span>  Bekerja</h3>
          {CallThesisData}
        </div>   
        <div className="impact-section">
          <div className="impact-text">
            <h3>Follow us Impact untuk <span>Mereka</span></h3>
          </div>
          <div className="impact-arrows">
            <img onClick={frontSlide} src={LeftArrow} alt="left-arrow" />
            <img onClick={backSlide} src={RightArrow} alt="right-arrow"/>
            
          </div>         
     
        </div>
        <div className="impact-card-section">
          {CallImpactData}                    
        </div>
             
            
      
       
        
       
        
    </div>
  )
}

export default Home