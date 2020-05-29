import React, { useState, useEffect } from "react";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";
import Axios from "axios";
import "../css/CreateSubscription.css";
import { Segment, Button, Grid, Input } from "semantic-ui-react";

const CreateSubscription = (props) => {
  const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
  const [subscriberStatus, setSubscriberStatus] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");

  const submitPayment = async () => {
    const stripeResponse = await props.stripe.createToken();

    if (stripeResponse.error) {
      setTransactionMessage(stripeResponse.error.message);
    } else {
      try {
        const paymentStatus = await Axios.post(
          "/subscriptions",
          { stripeToken: stripeResponse.token.id },
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
  };

  return (
    <div className="container">
      {subscriberStatus ? (
        <div className="messages">
          <h2 id="transaction-message">{transactionMessage}</h2>
          <h1 id="subscriber-message">You are a subscriber!</h1>
        </div>
      ) : (
        <>
          <h4 id="error-message">{transactionMessage}</h4>
          <div className="payment-container">
            <Segment padded inverted id="payment-interface">
              <h3>Become a subscriber today!</h3>
              <h4>Only $10 for a lifetime of News!</h4>
              <Grid>
                <p>
                  <em>subscription ends automatically after 30 days</em>
                </p>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <label htmlFor="cardnumber">Card number</label>
                    <Segment>
                      <CardNumberElement id="cardnumber" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={9}>
                    <label htmlFor="exp-date">Expiry date</label>
                    <Segment>
                      <CardExpiryElement id="exp-date" />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <label htmlFor="cvc">CVC</label>
                    <Segment>
                      <CardCVCElement id="cvc" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <div className="button-div">
                <Button basic inverted onClick={submitPayment}>
                  Confirm Payment
                </Button>
              </div>
            </Segment>
          </div>
        </>
      )}
    </div>
  );
};

export default injectStripe(CreateSubscription);
