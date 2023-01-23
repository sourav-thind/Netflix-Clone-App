import React , {useState, useEffect}from 'react'
import "../CSS/Nav.css"
const Nav = () => {
    const [show, setshow] = useState(false);
    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            setshow(true);
        }
        else{
            setshow(false);
        }
    }
    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar);
    
      
    }, [])
    
  return (

    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">

        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
        <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avtar" />
        </div>
        

    </div>
  )
}

export default Nav