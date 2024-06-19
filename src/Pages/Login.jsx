import React from 'react'
import ShowPass from '../Images/show-pass.svg'
import HidePass from '../Images/hide-password.svg'
import UserIcon from '../Images/user.svg'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import { useState } from 'react'
import Footer from '../Components/Footer'
import { Slide, Fade } from 'react-awesome-reveal'

function Login() {

  const [showPass, setShowPass] = useState(true)

  const showToggler = ()=> {
    setShowPass(!showPass)
  }

  console.log(showPass);

  return (
    <div className='login-container'>      
        <div className="comp-logo">
           <Fade><h2>Tesis</h2></Fade>
         </div>      
     <Fade> <div className="login-section">
        <div className="top-section">
         <form>
         <Slide direction='up'> <div className="user-holder">
             <img src={UserIcon} alt="user" />
           <input type="text" placeholder='User-name' /> 
           
            </div></Slide>
            <Slide direction='up'><div className="password-holder">
              <input  type={!showPass? 'text': 'password'} placeholder='Password'/>
              {showPass && <img onClick={showToggler} src={ShowPass} alt="show-password" />}
              {!showPass &&<img onClick={showToggler} src={HidePass} alt="hide-password" />}
            </div> </Slide>         
           
            <Slide direction='up'><input type="submit" value="submit" placeholder='submit'/></Slide>
          </form>
        </div>
        <Slide duration={2000}><div className="bottom-section">
          <Link to ='/ForgotPassword'><p>Forgot password</p></Link>  
          <p>Don't have a accoout?  <span> <Link to =
          '/CreateAccount'>Sign up</Link> </span></p>
        </div>   </Slide>  
       
      </div></Fade>
      <Footer/>
    </div>

  )
}

export default Login