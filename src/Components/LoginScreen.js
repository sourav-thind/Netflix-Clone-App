import React from 'react'
import '../CSS/LoginScreen.css'
const LoginScreen = () => {
 
  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
      <img className='loginScreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
      <button className='loginScreen_button'>Sign In</button>
      <div className="loginScreen_gradient"></div>
    </div>
    <div className="loginScreen_body">
        <h1>Unlimited movies, TV <br/>shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h3>Ready to watch? Enter or email to create or restart your membership.</h3>
    
    <div className="loginScreen_input">
        <form>

        <input type="email" placeholder='Email address' />
        <button className="loginScreen_getStarted">Get Started > </button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default LoginScreen
