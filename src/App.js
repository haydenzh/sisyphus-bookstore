import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AboutPage from './pages/aboutpage/about-page.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { dataFectchStartAsync } from './redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectIsDataLoading } from './redux/shop/shop.selector';
import HeaderContainer from './components/header-container/header-container.component';

class App extends React.Component {

  unSubscribeFromAuth = null;
  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.props.setCurrentUser(user);
    });
    this.props.dataFectchStartAsync();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <HeaderContainer />
            <Switch>
              <Route exact path="/" render={props => <HomePage isLoading={this.props.isLoading} {...props}/>} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp /> } />
              <Route path="/checkout" component={CheckoutPage} />
              <Redirect to="/" />
            </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  isLoading:selectIsDataLoading
});

const mapDispatchToProps = dispatch => ({
  dataFectchStartAsync:() => dispatch(dataFectchStartAsync()),
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
