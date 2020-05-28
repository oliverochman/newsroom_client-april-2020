import React , { useState } from "react";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";
import Axios from "axios";
import '../css/CreateSubscription.css'
import { Segment } from "semantic-ui-react";

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
        }, 4000)
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="payment-container">

      {subscriberStatus ?
        (
          <div className="messages">
            <h2 id="transaction-message">
              {transactionMessage}
            </h2>
            <h1 id="subscriber-message">You are a subscriber!</h1>
          </div>
        )
        :
        <div id="payment-interface">
          <label htmlFor="cardnumber">Card number</label>
          <Segment>
            <CardNumberElement id="cardnumber" />
          </Segment>
          <label htmlFor="exp-date">Expiry date</label>
          <Segment>
            <CardExpiryElement id="exp-date" />
          </Segment>
          <label htmlFor="cvc">CVC</label>
          <Segment>
            <CardCVCElement id="cvc" />
          </Segment>
          <button onClick={submitPayment}>Submit</button>
        </div>
      }
    </div>
  );
};

export default injectStripe(CreateSubscription);
