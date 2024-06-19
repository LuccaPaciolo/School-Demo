import React from 'react'
import '../Styles/Login.css'
import { Fade, Slide } from 'react-awesome-reveal'


function ForgotPassword() {
  return (
    <Fade><div forgot-password-container>
           <div className="forgot-password-section">
          <Slide duration={2000}><p>Enter the email address linked to your account to generate a new password</p></Slide>
          <Slide direction='up' duration={2000}><form>
            <input type="email" name="forgotPassword" id="" placeholder='Email Address' /> 
           <input type="submit" value="Send"  />
          </form></Slide>
        </div>
    </div></Fade>
  )
}

export default ForgotPassword