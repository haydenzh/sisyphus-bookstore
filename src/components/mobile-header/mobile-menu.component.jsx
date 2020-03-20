import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import './mobile-menu.styles.scss';

const MobileMenu = ({ currentUser,onClick}) => {
  return (
    <div className="mobile-menu" onClick={() => onClick()}>
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/shop" className="menu-item">
        Shop
      </Link>
      <Link to="/about" className="menu-item">
        About Us
      </Link>
      { 
        currentUser ? <div className="menu-item" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        (<Link to="/signin" className="menu-item">
          Sign In
        </Link>)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser:state.user.currentUser
});


export default connect(mapStateToProps)(MobileMenu);