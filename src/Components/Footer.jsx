import React from 'react'
import Instagram from '../Images/instagram.svg'
import Facebook from '../Images/facebook.svg'
import Youtube from '../Images/youtube-red.svg'
import Logo from '../Images/T-logo.png'
import '../Styles/Footer.css'
function Footer() {
    const getYear = new Date().getFullYear()
  return (
    <div className='footer-container'>
        <div className="section-1">
            <div className="section-1-cover">
                <div className="left-text">
                    <h4>Hubungi Kami</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolorem pariatur excepturi laboriosam, aperiam placeat labore eos.</p>
                </div>
                <div className="right-text">
                    <h4>Address:</h4>
                    <p>No. 33 Lorem ipsum  street dolor sit amet, consectetur.</p>
                    <h4>Telephone:</h4>
                    <p>+423 443 2424 22</p>
                    <h4>Email:</h4>
                    <p>tesis@gmail.com</p>
                    <h4>Website</h4>
                    <a href="#">wwww.tesis.co.id</a>
                </div>
            </div>            

        </div>
        <div className="section-2">
            <div className="left-section">
                <div className="footer-logo">
                    <img src={Logo} alt="" />
                    <h2>Tesis</h2>
                </div>
                <div className="footer-logo-text">
                    <p>Trusted platform website for creating idea snd collaboration</p>
                </div>

            </div>
            <div className="right-section">
                <div className="right-section-text">
                    <h5>Follow us</h5>
                </div>
                <div className="social-icons">
                    <img src={Instagram} alt="instagram" />
                    <img src={Facebook} alt="instagram" />
                    <img src={Youtube} alt="instagram" />
                </div>
            </div>
        </div>
        <div className="section-3">
            <div className="left-section">
            <p> Copyright &copy; {getYear} All Right Reserved</p>
            </div>
            <div className="right-section">
                <a href="#">Community</a>
                <a href="#">|Support</a>
                <a href="#">|Company</a>
                <a href="#">|Service</a>
            </div>
        </div>
    </div>
  )
}

export default Footer