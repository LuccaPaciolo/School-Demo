import React from 'react'
import ShowPass from '../Images/show-pass.svg'
import HidePass from '../Images/hide-password.svg'
import UserIcon from '../Images/user.svg'
import { Link } from 'react-router-dom'
import '../Styles/Login.css'
import { useState } from 'react'
import Footer from '../Components/Footer'

function Login() {

  const [showPass, setShowPass] = useState(true)

  const showToggler = ()=> {
    setShowPass(!showPass)
  }

  console.log(showPass);

  return (
    <div className='login-container'>      
        <div className="comp-logo">
           <h2>Tesis</h2>
         </div>      
      <div className="login-section">
        <div className="top-section">
          <form>
            <div className="user-holder">
             <img src={UserIcon} alt="user" />
             <input type="text" placeholder='User-name' /> 
           
            </div>
            <div className="password-holder">
              <input  type={!showPass? 'text': 'password'} placeholder='Password'/>
              {showPass && <img onClick={showToggler} src={ShowPass} alt="show-password" />}
              {!showPass &&<img onClick={showToggler} src={HidePass} alt="hide-password" />}
            </div>          
           
            <input type="submit" value="submit" placeholder='submit'/>
          </form>
        </div>
        <div className="bottom-section">
          <Link to ='/ForgotPassword'><p>Forgot password</p></Link>  
          <p>Don't have a accoout?  <span> <Link to =
          '/CreateAccount'>Sign up</Link> </span></p>
        </div>     
       
      </div>
      <Footer/>
    </div>

  )
}

export default Login