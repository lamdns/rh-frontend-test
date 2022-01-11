import React, { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import FormControl from '../../components/FormControl/FormControl';
import RadioButton from '../../components/RadioButton/RadioButton';
import CardPaymentOption from '../CardPaymentOption/CardPaymentOption';
import PaypalLogo from '../../assets/images/Paypal.png';
import './PaymentForm.scss';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expired, setExpired] = useState('');
  const [cvc, setCvc] = useState('');

  return (
    <div className="payment-form">
      <Heading tag='h2' showAs="heading-6">Your info</Heading>
      <FormControl name="name" label="Name" placeholder="Enter your name" />
      <FormControl
        name="lastName"
        label="Last name"
        placeholder="Enter your last name"
      />
      <FormControl name="email" label="Email" placeholder="Enter your email" />

      <Heading tag='h2' showAs="heading-6">Select payment</Heading>
      <RadioButton name="paymentType">
        <CardPaymentOption
          cardNumber={cardNumber}
          expired={expired}
          cvc={cvc}
          handleCardNumberChange={(e) => setCardNumber(e.target.value)}
          handleExpiredChange={(e) => setExpired(e.target.value)}
          handleCvcChange={(e) => setCvc(e.target.value)}
        />
      </RadioButton>
      <RadioButton className="paypal-payment-control" name="paymentType">
        <div className="paypal-payment">
          <img
            src={PaypalLogo}
            alt="PayPal"
            width="127"
            height="40"
            loading="lazy"
          />
          <div>You’ill be redirected to paypal.com</div>
        </div>
      </RadioButton>
      <p className="notes">By pledging, you agree with Lynq <a href="/#">Terms of Use</a>, <a href="/#">Privacy Policy</a> and <a href="/#">Cookie Policy</a></p>
    </div>
  );
};

export default PaymentForm;
