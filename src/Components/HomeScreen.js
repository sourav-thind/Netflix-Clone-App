import React from 'react';
import "../CSS/HomeScreen.css"; 
import Banner from './Banner';
import Nav from './Nav';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
    <Nav/>
    <Banner/>
    </div>
  )
}

export default HomeScreen