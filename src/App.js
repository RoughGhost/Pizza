import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import Hero from "./components/Hero";
import {productData, productDataTwo} from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
   <Router>
     <GlobalStyle/>
     <Hero/>
     <Products heading='Choose your favorite' data={productData}/>
     <Feature/>
     <Products heading='Elite Treats for you' data={productDataTwo}/>
     <Footer/>
      </Router>
    
  );
}

export default App;
