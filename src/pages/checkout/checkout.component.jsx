import React from 'react';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { selectCartItems,selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../components/stripe/stripe-checkout.component';

const CheckoutPage = ({cartItems,cartItemsTotal,history}) => (
    <div className="checkout-page">
      <h2 className="title">Cart</h2>
      {cartItems.length ? 
        <div className="checkout">
          <div className="checkout-header">
            <span className="image"></span>
            <span className="product">Product</span>
            <span className="price">Price</span>
            <span className="quantity">Quantity</span>
            <span className="total">Total</span>
            <span className="remove">Remove</span>
          </div>
          <div className="checkout-items">
            {cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}
          </div>
          <div className="checkout-footer"><span>Total:${cartItemsTotal.toFixed(2)}</span></div>
          <div className="checkout-button">
            <StripeCheckoutButton price={cartItemsTotal}/>
          </div>
        </div>
        : 
        <div className="empty-massage">
          <p>Your cart is empty</p>
          <CustomButton className="primary-btn" onClick={() => history.push('/shop')}>Return to Shop</CustomButton>
        </div>
      }
    </div>
 
);

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems,
  cartItemsTotal:selectCartItemsTotal
}) 

export default withRouter(connect(mapStateToProps)(CheckoutPage));