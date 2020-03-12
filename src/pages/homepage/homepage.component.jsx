import React from 'react';
import { connect } from 'react-redux';
import Showcase from '../../components/showcase/showcase.component';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { createStructuredSelector } from 'reselect';

import { selectTopRatedItems } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const HomePage = ({topRatedItems}) => (
  <div className="home-page">
    <div className="showcase-container">
      <Showcase />
    </div>
    <div className="directory-container">
      <Directory />
    </div>
    <div className="category-preview-container">
      <CategoryPreview title={'Top Rated'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, delectus!'} items={topRatedItems}/>
    </div>
  </div>
);


const mapStateToProps = createStructuredSelector({
  topRatedItems:selectTopRatedItems
})

export default WithSpinner(connect(mapStateToProps)(HomePage));