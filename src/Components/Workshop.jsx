import React from 'react'
import '../Styles/Workshop.css'
function Workshop(props) {
  return (
    <div className='workshop-container'>
        <div className="workshop">
            <img src={props.image} alt="" />
            <h3>{props.workshop}</h3>

        </div>

     
    </div>
  )
}

export default Workshop