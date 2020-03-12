import React from 'react';
import './cart-icon.styles.scss';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-cart.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({itemCount,toggleCartHidden}) => (
  <div className="cart-icon-container" onClick={() => toggleCartHidden()}>
    <ShoppingCartIcon className="cart-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemCount:selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);