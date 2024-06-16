import Logo from '../Images/T-logo.png'
import SearchIcon from '../Images/search-icon.svg'
import Ham from '../Images/ham.svg'
import { Link } from 'react-router-dom'
import Close from '../Images/close.svg'
import '../Styles/Nav.css'
import {useState} from 'react'

function Nav() {

  const [showNav, setShowNav] = useState(true)

  const showNavToggler = ()=> {
    setShowNav (!showNav)
  }

  const removeNav = ()=> {
    setShowNav(showNav(false))
  }


  console.log(removeNav);
  
  return (
    <div className='navbar-container'>
        <div className="brand">
          <Link onClick={removeNav} to='/'><img src={Logo} alt="logo" /></Link> 
          <Link onClick={removeNav} to='/'><h3>Beranda</h3></Link> 
        </div>
        <div className={!showNav? 'mobile-view': 'desktop-view'}>
          <div className="ham-control">
             {showNav && <img onClick={showNavToggler} src={Ham} alt="hamburger" />}
           {!showNav && <img onClick={showNavToggler} src={Close} alt="close" />}
          </div>
           <div className="nav-links">
            <div className="search">
            <Link onClick={removeNav} to='/Program'>Program</Link>
              <form>             
                <img src={SearchIcon} alt="search-icon" />
                <input type="text" name="search" placeholder='Search' />            
              </form>

            </div>            
            
            <Link onClick={removeNav} className='login' to='/Login'>Login</Link>
          </div>
        </div>
        

    </div>
  )

}

export default Nav