import React , { useState } from "react";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";
import Axios from "axios";

const CreateSubscription = props => {
  //const headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
  const [subscriberStatus, setSubscriberStatus] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState("")
  const submitPayment = async () => {
    const stripeResponse = await props.stripe.createToken()

    try {
      const paymentStatus = await Axios.post('/subscriptions',
        { stripeToken: stripeResponse.token.id },
        //{ headers: headers }
      )
      if (paymentStatus.status === 200) {
        setSubscriberStatus(true)
        setSubscriptionMessage(paymentStatus.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
    {subscriberStatus ?
      <span id="subscription-message">
      {subscriptionMessage}</span>
      :
      <div id="payment-interface">
        <CardNumberElement id="cardnumber" />
        <CardExpiryElement id="exp-date" />
        <CardCVCElement id="cvc" />
        <button onClick={submitPayment}>Submit</button>
      </div>
    }
  </>
  );
};

export default injectStripe(CreateSubscription);
