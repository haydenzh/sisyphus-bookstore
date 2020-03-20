import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import { addItem,removeItem,clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem =({ item,addItem,removeItem,clearItemFromCart }) => {
  const { imageUrl,name,quantity,price } = item; 
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="price">${price}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(item)}>&#10094;</span>
        {quantity}
        <span className="arrow" onClick={() => addItem(item)}>&#10095;</span>
      </span>
      <span className="total">${price*quantity}</span>
      <span className="remove" onClick={() => clearItemFromCart(item)}>&#10005;</span>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  addItem:item => dispatch(addItem(item)),
  removeItem:item => dispatch(removeItem(item)),
  clearItemFromCart:item => dispatch(clearItemFromCart(item))
})



export default connect(null,mapDispatchToProps)(CheckoutItem);