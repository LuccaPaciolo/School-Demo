import React from 'react'
import '../Styles/ThesisCard.css'
import { Slide } from 'react-awesome-reveal'

function ThesisCard(props) {
  return (
   <Slide direction='up'> <div className='thesis-card-section'>
      <div className='thesis-card'>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div></Slide>
  )
}

export default ThesisCard