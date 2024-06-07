import React from 'react'
import '../Styles/ImpactCard.css'

function ImapctCard(props) {
  return (
    <div className='impact-card'>
      <div className="impact-card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="impact-card-text">
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        <p>{props.text}</p>
      </div>      
        
    </div>
  )
}

export default ImapctCard