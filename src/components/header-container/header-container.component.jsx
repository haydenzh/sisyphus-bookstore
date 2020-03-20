import React from 'react';

import Header from '../../components/header/header.component';

import MobileHeader from '../../components/mobile-header/mobile-header.component';

class HeaderContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      enableMobileHeader: false
    }
  }

  mediaQuery = null;

  toggleMobileHeader = (mq) => {
    if(mq.matches){
      if(!this.state.enableMobileHeader){
        this.setState({enableMobileHeader:true});
      }
    }
    else {
      if(this.state.enableMobileHeader){
        this.setState({enableMobileHeader:false});
      }
    }
  }

  componentDidMount(){
    this.mediaQuery = window.matchMedia("(max-width:560px)");
    this.toggleMobileHeader(this.mediaQuery);
    this.mediaQuery.addListener(this.toggleMobileHeader);
  }

  componentWillUnmount(){
    this.mediaQuery.removeListener(this.toggleMobileHeader);
  }

  render() { 
    return this.state.enableMobileHeader ?  <MobileHeader {...this.props}/> : <Header {...this.props}/>; 
  }
}

export default HeaderContainer;