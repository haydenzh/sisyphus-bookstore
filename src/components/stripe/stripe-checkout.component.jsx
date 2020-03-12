import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';

const onToken = token => {
  alert('Payment successful.')
}

const StripeCheckoutButton = ({price}) =>  {
  const priceForStripe = price*100;
  const PUBLISHABLE_KEY = "pk_test_Iv31eZWHVdmvDfTgxVlfyMdV001puFFVMD";
  
  return (
    <StripeCheckout 
      token={onToken}
      stripeKey={PUBLISHABLE_KEY}
      name="Sisyphus Co.Ltd"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      billingAddress
      shippingAddress
      ComponentClass="div"
    >
    <CustomButton inverted>PROCEED TO CHECKOUT</CustomButton>
    </StripeCheckout>
  );
}

export default StripeCheckoutButton;