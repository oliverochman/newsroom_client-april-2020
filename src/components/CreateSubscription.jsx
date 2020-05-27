import React from 'react'
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements'


const CreateSubscription = () => {
  const submitPayment = () => {} 
  return (
    <div id='payment-interface'>
      <CardNumberElement id='cardnumber' />
      <CardExpiryElement id='exp-date' />
      <CardCVCElement id='cvc' />
      <button onClick={submitPayment}>Submit</button>

    </div>

  )
}

export default injectStripe(CreateSubscription)
