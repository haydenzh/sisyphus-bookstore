import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './mobile-header.styles.scss';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import MobileMenu from './mobile-menu.component';

class MobileHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuHidden:true
    };
  }

  toggleMenuHidden = () => {
    this.setState({ menuHidden: !this.state.menuHidden });
  }

  render() {
    return (
      <div className="mobile-header">
        <span className="mobile-menu-button" onClick={() => this.toggleMenuHidden()}><i className="fa fa-bars"></i></span>
        {
          this.state.menuHidden ? null : <MobileMenu onClick={this.toggleMenuHidden} />
        }

        <span className="logo" onClick={() => {
          this.setState({ menuHidden:true });
          this.props.history.push("/");
        }}>
          Sisyphus
        </span>
        <div className="shopping-cart"  onClick={() => this.setState({ menuHidden:true })}>
          <CartIcon />
        </div>
        { this.props.cartHidden ? null : <CartDropdown /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartHidden:state.cart.cartHidden
});

export default withRouter(connect(mapStateToProps)(MobileHeader));
