import React from 'react'
import Logo from '../Images/T-logo.png'
import SearchIcon from '../Images/search-icon.svg'
import Ham from '../Images/ham.svg'
import Close from '../Images/close.svg'
import '../Styles/Nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {

  const [showNavList, setShowNavList] = useState(false)

  const showNavListToggler = ()=> {
    setShowNavList (!showNavList)
  }
  console.log(showNavList);

  const removeNavList = ()=> {
    setShowNavList (false)
  }

  return (
    <div className='nav-bar'>
        <div className="brand">
           <Link to='/'> <img onClick={removeNavList}   src={Logo} alt="logo"className='logo'/>
            </Link>
            <Link to='/'><h3 onClick={removeNavList} className='com-name'>Beranda</h3></Link>            
            <div className="mobile-icon">
              {!showNavList && <img  onClick={showNavListToggler} src={Ham} alt="hamburger-icon" className='ham-icon'/>}                     
             {showNavList && <img onClick={showNavListToggler} src={Close} alt="close-icon" className='close-icon'/> }
            </div>            
        </div>
   
       { showNavList && <div className="nav-link">                         
            <form>
            <input type="text" />
            <img src={SearchIcon}alt="search-icon" className='search-icon'/>           
            </form>
            <Link onClick={showNavListToggler} to='/Program'><h3>Program</h3></Link>
            <Link to ='/Login'><button className='login-button' onClick={removeNavList}>Login</button></Link>
        </div>}
    </div>
  )
}

export default Nav