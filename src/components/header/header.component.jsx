import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';

import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser,cartHidden}) => {
  return (
  <header className="header">
    <Link to="/" className="logo">Sisyphus</Link>
    <div className="options">
      <Link to="/" className="option">
        Home
      </Link>
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/about" className="option">
        About Us
      </Link>
      { 
        currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        (<Link to="/signin" className="option">
          Sign In
        </Link>)
      }
      <CartIcon />
    </div>
    { cartHidden ? null : <CartDropdown /> }
  </header>
)};

const mapStateToProps = state => ({
  cartHidden:state.cart.cartHidden,
  currentUser:state.user.currentUser
});

export default connect(mapStateToProps)(Header);