import React from 'react'
import { useState } from 'react'

function CreateAccount() {

  const [formInputs, setFormInputs] = useState ({
    firstName: '',
    lastName: '',
    middleName: '',
    date: '',
    email: '',
    telephone:'',
    password: '',
    confirmPassword: ''
  })

  const formControl = (e)=> {
    setFormInputs ({
      ...formInputs, 
      [e.target.name] : e.target.value
      
    })
      
    
  }


  return (
    <div className='sign-up-container'>
         <div className="sign-up-section">
          <div className="sign-up-text">
            <p>Don't have an account with us? Fill out the form below to <span>create one.</span></p>
          </div>
          <div className="sign-up-form">
            <form>           
              <input onChange={formControl} type="text" name='firstName'placeholder='First-name' />
              <input onChange={formControl} type="text" name='lastName' placeholder='Last-name' />
              <input onChange={formControl}  type="text" name='middleName' placeholder='Middle-name' />
              <input onChange={formControl} type='date' name="date" id="" placeholder='date of birth'/>
              <input onChange={formControl} type="email" name="email" id="" placeholder='Email' />
              <input onChange={formControl} type="tel" name="telephone" id="" placeholder='Telephone' />
              <input onChange={formControl} type="text" name='password' placeholder='Password'/>
             <input onChange={formControl} name='confirmPassword'type="text" placeholder='confirm-password' />  
              <input type="submit" value="Create Account" />
            </form>
          </div>
  
  

        </div>
    </div>
  )
}

export default CreateAccount