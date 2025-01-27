import { useState } from 'react'
import Navbar from './components/Navbar';
import CareerAspiration from './components/CareerAspiration';


function App() {

  return (
    <>
      <div className="container border border-danger min-vh-100">
        <Navbar />
        <CareerAspiration />
      </div>
    </>
  );
}

export default App
