import React from 'react'
import Logo from '../Images/T-logo.png'
import Building from '../Images/school-building.svg'
import Student from '../Images/student.svg'
import Studies from '../Images/studies.svg'
import { Slide, Fade, Bounce, Roll } from 'react-awesome-reveal'

import '../Styles/Thesis.css'

function Thesis() {
  return (
    <div className='thesis-container'>
        <Slide><div className="thesis-text">
            <h3>Apa itu <span>TESIS?</span> </h3> <br></br>
            <p>TESIS merupelion program kolaborasi antara Perguruan Tinggi dengan Indusmi seners digital</p><br></br>
            <p>komunikasi pembelajar aborasi yang bas yang mendorong mendorong batte batas semus piha</p>
        </div></Slide>
       <Fade> <div className="thesis-image">
            <div className="circle">
                <img src={Logo} alt="com-logo" className='circle-logo' />
                <img src={Building} alt="school-building" className='school-building' />
                <img src={Studies} alt="scholar" className='studies' />
                <img src={Student} alt="student" className='student' />

                
            </div>
        </div></Fade>
        
    </div>
  )
}

export default Thesis