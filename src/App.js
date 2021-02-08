import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './Components/Hero';
import Products from './Components/Products';
import Menu from './Components/Menu/';
import { productData, productDataTwo } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Nuestras estrellas' data={productData} />
      <Feature />
      <Menu heading="Nuestro plantel" data={productDataTwo}></Menu>
      <Footer />
    </Router>
  );
}

export default App;
