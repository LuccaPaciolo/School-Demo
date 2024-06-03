import React from 'react'
import '../Styles/ImpactCard.css'

function ImpactCard(props) {
  return (
    <div className='impact-container'>

        <img src={props.image} alt="lecturer-pic"/>  
        <div className="impact-card-text">
            <h3>{props.name}</h3>
            <h5>{props.position}</h5>
            <p>{props.text}</p>
        </div>
      
        
    </div>
  )
}

export default ImpactCard