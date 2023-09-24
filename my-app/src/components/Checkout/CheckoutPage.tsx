import React, {useState} from "react";
import Navbar from "../Elements/Navbar/Navbar";
import HeaderSection from "../Elements/Header/HeaderSection";
import MainSection from "../Home/MainSection";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import Footer from "../Elements/Footer/Footer";
import '../../dist-styles/checkout.css'; 

const CheckoutPage = () => {

  const [isValidationConfirmed, setValidationConfirm] = useState(true); 
    
    return (
      <>
        <HeaderSection>
            <Navbar /> 
        </HeaderSection>
        <MainSection>
           <div className="checkout-container">
             <CheckoutForm setValidation={setValidationConfirm}/> 
             <CheckoutCart isButtonDisabled={isValidationConfirmed}/> 
           </div>
        </MainSection>
        <Footer /> 
      </>
    )
}

export default CheckoutPage; 