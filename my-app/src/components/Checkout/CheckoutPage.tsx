import React from "react";
import Navbar from "../Elements/Navbar/Navbar";
import HeaderSection from "../Elements/Header/HeaderSection";
import MainSection from "../Home/MainSection";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import Footer from "../Elements/Footer/Footer";
import '../../dist-styles/checkout.css'; 

const CheckoutPage: React.FC = () => {
    
    return (
      <>
        <HeaderSection>
            <Navbar /> 
        </HeaderSection>
        <MainSection>
           <div className="checkout-container">
             <CheckoutForm /> 
             <CheckoutCart /> 
           </div>
        </MainSection>
        <Footer /> 
      </>
    )
}

export default CheckoutPage; 