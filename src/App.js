import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './GlobalStyles';
import Hero from './Components/Hero';
import Products from './Components/Products';
import Menu from './Components/Menu/';
import {productData, productDataTwo} from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import {Provider} from 'react-redux';
import Cart from './Store/Cart/index'
function App() {
  return (
    <Router>
      <Provider store={Cart}>
        <GlobalStyle/>
        <Hero id="Hero"/>
        <Products heading='Nuestras estrellas' data={productData}/>
        <Feature/>
        <Menu heading="Nuestro plantel" data={productDataTwo}></Menu>
        <Footer/>
        </Provider>
    </Router>
  );
}

export default App;
