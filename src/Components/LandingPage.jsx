import React from 'react'
import '../Styles/LandingPage.css'
import LandingImage from '../Images/landing-image.jpeg'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className='landing-page'>
        <div className="landing-text">
            <h1>Mewujudkan</h1>
            <h1 className='color-black'>Masa Depan</h1>
            <h1>Berkolaborasi</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
            <Link to='/Login'><button className='landing-btn'>Tentang Kami</button></Link>
        </div>
        <div className="landing-image">
            <img src={LandingImage} alt="university-landing-page" />
        </div>
       
        
        
    </div>
  )
}

export default LandingPage