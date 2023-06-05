import React , {useRef, useState} from 'react'
import '../CSS/SignUpScreen.css' 
import { auth } from '../firebase';
const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [SignUp, setSignUp] = useState(false);
  const register = (e)=>{

    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
     ).then((authUser)=>{
      
     }).catch((error)=>{
      alert(error.message);
     });
  }

  const signIn = (e)=>{
   e.preventDefault();
   auth.signInWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
   ).then((authUser)=>{
    console.log(authUser)
   }).catch((error)=>{
    alert(error.message);
   });

   
  }
  return (
    !SignUp?<div className='signUpScreen'>
      <h1>Log In</h1>
        <form>
          <input ref={emailRef} type="email" placeholder='Email or Phone Number'/>
          <input ref={passwordRef} type="password" placeholder='Password'/>
          <button type='submit' onClick={signIn}>Log In</button>
        </form>
          <input className='signUpScreen_checkbox' type="checkbox" /> <h4 className='signUpScreen_cb_text'>Remember Me</h4>

          <h4 className='signUpScreen_h4'><span className='signUpScreen_gray'>New to Netflix? </span > <span className='signUpScreen_link' onClick={()=>setSignUp(true)}>Sign Up Now</span></h4>
          <h5>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='signUpScreen_learnmore'>Learn more.</span></h5> 
    </div>:<div className='signUpScreen'>
    <h1>Sign Up</h1>
        <form>
          <input ref={emailRef} type="email" placeholder='Email or Phone Number'/>
          <input ref={passwordRef} type="password" placeholder='Password'/>
          <button type='submit' onClick={register}>Sign Up</button>
        </form>
          <input className='signUpScreen_checkbox' type="checkbox" /> <h4 className='signUpScreen_cb_text'>Remember Me</h4>

          <h4 className='signUpScreen_h4'><span className='signUpScreen_gray'>Already have an Account? </span > <span className='signUpScreen_link' onClick={()=>setSignUp(false)}>LogIn Now</span></h4>
          <h5>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='signUpScreen_learnmore'>Learn more.</span></h5> 
    </div>
  )
}

export default SignUpScreen
