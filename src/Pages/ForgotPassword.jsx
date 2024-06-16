import React from 'react'
import '../Styles/Login.css'
function ForgotPassword() {
  return (
    <div forgot-password-container>
           <div className="forgot-password-section">
          <p>Enter the email address linked to your account to generate a new password</p>
          <form>
            <input type="email" name="forgotPassword" id="" placeholder='Email Address' /> 
            <input type="submit" value="Send"  />
          </form>
        </div>
    </div>
  )
}

export default ForgotPassword