import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS/ProfileScreen.css'
import { selectUser } from '../features/counter/userSlice'
import Nav from './Nav';
import {auth} from '../firebase'
import PlanScreen from './PlanScreen';
const ProfileScreen = () => {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avtar" />
        
      
      <div className="profileScreen_details">
        <h2>{user.email}</h2>
        <div className="profileScreen_plans">
        <h3>Plans</h3>
        <PlanScreen/>
            <button onClick={()=> auth.signOut()} className="profileScreen_signOut">Sign Out</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
