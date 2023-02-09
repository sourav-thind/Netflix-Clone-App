import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Components/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginScreen from './Components/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './Components/ProfileScreen';

function App() {
  
 const user = useSelector(selectUser);
 const dispatch = useDispatch();
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      //logged in
    dispatch(login({
      uid: userAuth.uid,
      email : userAuth.email
    }))
    }
    else{
      //not loggedin
      dispatch(logout());
    }
  } )
   return unsubscribe;
 }, [dispatch])
 
  return (
    <div className="app">
      <Router>
{!user? (<LoginScreen/>):(
      <Routes>
      <Route path="/" element={<Homescreen />} />
      <Route path="/profile" element={<ProfileScreen/>} />
    </Routes>)}
      </Router>
      
    </div>
  );
}

export default App;
