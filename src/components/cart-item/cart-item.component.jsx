import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item}) => {
  const {imageUrl,name,quantity,price} = item;
  return (
    <div className="cart-item">
      <div className="item-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
      <span className="name">{name}</span>
      <span className="quantity">X{quantity}</span>
      <span className="total">${(price*quantity).toFixed(2)}</span>
    </div>
  );
}

export default CartItem;