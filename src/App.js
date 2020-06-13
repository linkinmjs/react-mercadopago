import React from 'react';
import Navbar from './components/Navbar';

import './App.css';

function App() {

  const nombre = 'Lalo Landa';
  

  return (
    <Navbar nombre={nombre} />
  )
}

export default App;