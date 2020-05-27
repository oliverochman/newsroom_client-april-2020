import React from 'react'
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements'


const CreateSubscription = () => {
  return (
    <div id='payment-interface'>
      <CardNumberElement />
      <CardExpiryElement />
      <CardCVCElement />
    </div>
  )
}

export default injectStripe(CreateSubscription)
