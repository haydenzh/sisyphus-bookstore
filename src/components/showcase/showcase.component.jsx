import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import './showcase.styles.scss';

const Showcase = ({history}) => (
  <div className="showcase">
    <span><span>CLEARANCE SALE</span></span>
    <h2>TEXTBOOKS</h2>
    <p>Off up to 45% for all Textbooks & Study Guides</p>
    <CustomButton className={'primary-btn'} onClick={() => history.push('/shop/textbooks')}>SHOP NOW</CustomButton>  
  </div>
);

export default withRouter(Showcase);