import React from 'react';
import InputMask from "react-input-mask";
import "./CardPaymentOption.scss";

const CardPaymentOption = ({
  cardNumber,
  expired,
  cvc,
  handleCardNumberChange,
  handleExpiredChange,
  handleCvcChange,
}) => {
  return (
    <div className="card-payment-option">
      <div className="credit-card-icon"></div>
      <InputMask
        mask="9999-9999-9999-9999"
        type="text"
        placeholder="Card number"
        className="card-number"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <InputMask
        mask="99/99"
        type="text"
        placeholder="MM/YY"
        className="card-expired"
        value={expired}
        onChange={handleExpiredChange}
      />
      <InputMask
        mask="999"
        type="text"
        placeholder="CVC"
        className="card-cvc"
        value={cvc}
        onChange={handleCvcChange}
      />
    </div>
  );
};

export default CardPaymentOption;
