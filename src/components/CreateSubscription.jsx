import React, { useState } from "react";
import Axios from "axios";
import "../css/CreateSubscription.css";
import PaymentInterface from "./PaymentInterface";
import { Elements } from 'react-stripe-elements'

const CreateSubscription = (props) => {
  const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  const [subscriberStatus, setSubscriberStatus] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");

  const submitPayment = async (stripeToken) => {
    try {
      const paymentStatus = await Axios.post(
        "/subscriptions",
        { stripeToken: stripeToken },
        { headers: headers }
      );
      if (paymentStatus.status === 200) {
        setSubscriberStatus(true);
        setTransactionMessage(paymentStatus.data.message);

        setTimeout(() => {
          setTransactionMessage("");
        }, 4000);
      }
    } catch (error) {
      setTransactionMessage(error.response.data.message);
      console.log(error);
    }
  }

  return (
    <div className="container">
      {subscriberStatus ? (
        <div className="messages">
          <h2 id="transaction-message">{transactionMessage}</h2>
          <h1 id="subscriber-message">You are a subscriber!</h1>
        </div>
      ) : (
        <>
          <h4 className="error-message">{transactionMessage}</h4>
          <Elements>
            <PaymentInterface submitPayment={submitPayment}/>
          </Elements>
        </>
      )}
    </div>
  );
};

export default CreateSubscription;
