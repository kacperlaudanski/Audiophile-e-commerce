import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import HeadphonesPage from "./pages/Headphones/HeadphonesPage";
import EarphonesPage from "./pages/Earphones/EarphonePage";
import SpeakersPage from "./pages/Speakers/SpeakersPage";
import ProductPage from "./components/Elements/Products/ProductPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import { ShoppingCartContextProvider } from "./context/CartContext";

function App() {
  return (
    <React.Fragment>
      <ShoppingCartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route element={<HeadphonesPage />} path="/headphones" />
            <Route element={<EarphonesPage />} path="/earphones" />
            <Route element={<SpeakersPage />} path="/speakers" />
            <Route element={<ProductPage />} path={"/:category/:product"} />
            <Route element={<CheckoutPage />} path="/checkout" />
          </Routes>
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </React.Fragment>
  );
}

export default App;
