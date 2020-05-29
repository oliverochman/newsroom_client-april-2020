import React, { useState } from "react";
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
  //const headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
  const [subscriberStatus, setSubscriberStatus] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");
  const submitPayment = async () => {
    const stripeResponse = await props.stripe.createToken();

    try {
      const paymentStatus = await Axios.post(
        "/subscriptions",
        { stripeToken: stripeResponse.token.id }
        //{ headers: headers }
      );
      if (paymentStatus.status === 200) {
        setSubscriberStatus(true);
        setTransactionMessage(paymentStatus.data.message);
        setTimeout(() => {
          setTransactionMessage("");
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment-container">
      {subscriberStatus ? (
        <div className="messages">
          <h2 id="transaction-message">{transactionMessage}</h2>
          <h1 id="subscriber-message">You are a subscriber!</h1>
        </div>
      ) : (
        <Segment padded inverted id="payment-interface">
          <h3>Subscription Options</h3>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Input
                  type="radio"
                  id="monthly"
                  name="option"
                  value="monthly"
                ></Input>
                <label htmlFor="monthly">1 Month for only <strong>$10!</strong></label>
              </Grid.Column>
              <Grid.Column width={8}>
                <Input
                  type="radio"
                  id="yearly"
                  name="option"
                  value="yearly"
                ></Input>
                <label htmlFor="yearly">12 Months for only <strong>$80!</strong></label>
              </Grid.Column>
            </Grid.Row>
            <p><em>Subscription continues until cancelled. When a subscriber cancels his/her subscription it continues until the chosen period of time has ended. Billing will recur monthly.</em></p>
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
      )}
    </div>
  );
};

export default injectStripe(CreateSubscription);
