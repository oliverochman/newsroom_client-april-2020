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
  const [transactionMessage, setTransactionMessage] = useState("")
  const submitPayment = async () => {
    const stripeResponse = await props.stripe.createToken()

    try {
      const paymentStatus = await Axios.post('/subscriptions',
        { stripeToken: stripeResponse.token.id },
        //{ headers: headers }
      )
      if (paymentStatus.status === 200) {
        setSubscriberStatus(true)
        setTransactionMessage(paymentStatus.data.message)
        setTimeout(() => {
          setTransactionMessage("")
        }, 2000)
      }
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <>
    {subscriberStatus ?
      (
        <>
          <h2 id="transaction-message" style={{color: "black"}}>
            {transactionMessage}
          </h2>
          <h1 id="subscriber-message" style={{color: "black"}}>You are a subscriber!</h1>
        </>
      )
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
