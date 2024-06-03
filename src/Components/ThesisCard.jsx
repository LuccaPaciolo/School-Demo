import React from 'react'
import '../Styles/ThesisCard.css'

function ThesisCard(props) {
  return (
    <div className='thesis-card'>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default ThesisCard