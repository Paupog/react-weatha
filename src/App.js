import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
   <Weather defaultCity="New York"/>
    <footer>
      This project was coded by  <a href="https://github.com/Paupog/react-weatha" 
     target="_blank" 
     rel="noreferrer">Paulina Pogwizd</a> and open-sourced on {""}
   Github 
    </footer>
    </div>
    </div>
  );
}


