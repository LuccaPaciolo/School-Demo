import React from 'react'
import '../Styles/Workshop.css'
import { Slide } from 'react-awesome-reveal'
function Workshop(props) {
  return (
   <Slide direction='up' delay={-100}> direction='up'> <div className='workshop-container'>
        <div className="workshop">
            <img src={props.image} alt="" />
            <h3>{props.workshop}</h3>

        </div>

     
    </div></Slide>
  )
}

export default Workshop