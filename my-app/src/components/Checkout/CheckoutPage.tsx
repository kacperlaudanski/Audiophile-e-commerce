import React, {useState} from "react";
import Navbar from "../Elements/Navbar/Navbar";
import HeaderSection from "../Elements/Header/HeaderSection";
import MainSection from "../Home/MainSection";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import Footer from "../Elements/Footer/Footer";
import '../../dist-styles/checkout.css'; 
import GoBackButton from "../Elements/GoBackButton/GoBackButton";

const CheckoutPage = () => {

  const [isValidationConfirmed, setValidationConfirm] = useState(true); 
    
    return (
      <>
        <HeaderSection>
            <Navbar /> 
        </HeaderSection>
        <MainSection>
           <GoBackButton />
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