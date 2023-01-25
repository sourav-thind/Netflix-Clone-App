import React from 'react';
import './App.css';
import Homescreen from './Components/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginScreen from './Components/LoginScreen';

function App() {
 const user = null;
  return (
    <div className="app">
      <Router>
{!user? (<LoginScreen/>):(
      <Routes>
      <Route path="/" element={<Homescreen />} />
      <Route path="/books" element={<Homescreen/>} />
    </Routes>)}
      </Router>
      
    </div>
  );
}

export default App;
