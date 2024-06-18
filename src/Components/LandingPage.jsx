import React from 'react'
import '../Styles/LandingPage.css'
import LandingImage from '../Images/landing-image.jpeg'
import { Link } from 'react-router-dom'
import { Fade, Slide } from 'react-awesome-reveal'


function LandingPage() {
  return (
    <div className='landing-page'>
       <Fade> direction='up'><div className="landing-text">
            <h1>Mewujudkan</h1>
            <h1 className='color-black'>Masa Depan</h1>
            <h1>Berkolaborasi</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
            <Link to='/Login'><button className='landing-btn'>Tentang Kami</button></Link>
        </div>
        </Fade>
        <Slide direction='side'><div className="landing-image">
            <img src={LandingImage} alt="university-landing-page" />
        </div></Slide>

        
       
        
        
    </div>
  )
}

export default LandingPage