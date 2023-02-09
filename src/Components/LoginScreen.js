import React , {useState} from 'react'
import '../CSS/LoginScreen.css'
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
 const [signIn, setsignIn] = useState(false);
  return (
    <div className='loginScreen'>
        <div className="loginScreen_background">
      <img className='loginScreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
      <button onClick={()=>{setsignIn(true)}} className='loginScreen_button'>Sign In</button>
      <div className="loginScreen_gradient"></div>
    </div>
    
    <div className="loginScreen_body">
    {signIn?<SignUpScreen/>:
    <>
        <h1>Unlimited movies, TV <br/>shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <h3>Ready to watch? Enter or email to create or restart your membership.</h3>
    
    <div className="loginScreen_input">
        <form>

        <input type="email" placeholder='Email address' />
        <button onClick={()=>{setsignIn(true)}} className="loginScreen_getStarted"><div className='loginScreen_getStarted_text'> <span >Get Started </span></div></button>
        </form>
    </div>
    </>}
    </div>
    </div>
  )
}

export default LoginScreen
