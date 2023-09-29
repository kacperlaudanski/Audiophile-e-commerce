import React from "react";
import "../../dist-styles/checkout.css";
import CashPaymentIcon from '../../images/checkout/icon-cash-on-delivery.svg'

const CashPaymentInfo = () => {
  return (
    <div className="payment-info-container">
      <img src={CashPaymentIcon} alt="cash-payment-icon"></img>
      <p>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery <br></br> courier arrives at your residence. Just make sure
        your address is correct so <br></br> that your order will not be
        cancelled.
      </p>
    </div>
  );
};

export default CashPaymentInfo;
