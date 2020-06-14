import React, {Fragment} from 'react';

import './App.css';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';



function App() {

  const nombre = 'Lalo Landa';  


  return (
    <Fragment>
      <Navbar nombre={nombre} />
      <ProductCard 

      />
    </Fragment>
  )
}

export default App;