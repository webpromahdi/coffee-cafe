import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  useEffect(()=>{
    Aos.init({
      offset: 100, 
      delay: 100, 
      duration: 700, 
      easing: 'ease-in'
    });
  });
  return (
    <div className='overflow-x-hidden'>
      <Navbar></Navbar>
    </div>
  );
};

export default App;