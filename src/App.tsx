import { useState } from 'react'
import Navbar from './components/Navbar';
import CareerAspiration from './components/CareerAspiration';


function App() {

  return (
    <>
      <div className="container border min-vh-100 bg-white rounded ">
        <Navbar />
        <CareerAspiration />
      </div>
    </>
  );
}

export default App
