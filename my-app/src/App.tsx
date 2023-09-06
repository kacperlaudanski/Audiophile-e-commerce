import React from 'react';
import { BrowserRouter, Routes, Route, Link,  } from 'react-router-dom'; 
import Home from './components/Home/Home';
import HeadphonesPage from './components/Categories/Headphones/HeadphonesPage';
import EarphonesPage from './components/Categories/Earphones/EarphonePage';
import SpeakersPage from './components/Categories/Speakers/SpeakersPage';
import ProductPage from './components/Elements/Products/ProductPage';
import CheckoutPage from './components/Checkout/CheckoutPage';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
       <Routes>
         <Route index element = {<Home />} /> 
         <Route element = {<HeadphonesPage />} path = '/headphones' />
         <Route element = {<EarphonesPage />} path = '/earphones'/>
         <Route element = {<SpeakersPage />} path = '/speakers'/> 
         <Route element = {<ProductPage />} path = {'/:category/:product'} /> 
         <Route element = {<CheckoutPage />} path='/checkout' /> 
       </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
