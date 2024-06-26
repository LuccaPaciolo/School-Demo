import React from 'react'
import W1 from '../Images/w-1-black.svg'
import W2 from '../Images/w-2-black.svg'
import W3 from '../Images/w-3-black.svg'
import '../Styles/Partners.css'
import { Slide } from 'react-awesome-reveal'

function Partners() {
  return (
   <Slide duration={1500}><div className='partners-container'>
        <div className="partners-text">
            <h3>Our <span>University Partners</span></h3>
        </div>
       <div className="partners-images">
            <img src={W1}alt="" />
            <img src={W2}alt="" />
            <img src={W3}alt="" />
        </div> 
    </div></Slide> 
  )
}

export default Partners