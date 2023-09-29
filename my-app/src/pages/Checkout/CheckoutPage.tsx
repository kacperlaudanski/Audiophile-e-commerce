import {useState} from "react";
import Navbar from "../../components/Elements/Navbar/Navbar";
import HeaderSection from "../../components/Elements/Header/HeaderSection";
import MainSection from "../Home/MainSection";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import Footer from "../../components/Elements/Footer/Footer";
import '../../dist-styles/checkout.css'; 
import GoBackButton from "../../components/Elements/GoBackButton/GoBackButton";

const CheckoutPage = () => {

  const [isValidationConfirmed, setValidationConfirm] = useState(false); 
    
    return (
      <>
        <HeaderSection>
            <Navbar /> 
        </HeaderSection>
        <MainSection>
           <GoBackButton />
           <div className="checkout-container">
             <CheckoutForm setValidation={setValidationConfirm}/> 
             <CheckoutCart isButtonDisabled={!isValidationConfirmed}/> 
           </div>
        </MainSection>
        <Footer /> 
      </>
    )
}

export default CheckoutPage; 