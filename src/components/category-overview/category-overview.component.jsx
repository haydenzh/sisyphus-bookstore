import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShopCategoriesForPreview } from '../../redux/shop/shop.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import './category-overview.styles.scss';

const CategoryOverview = ({ categories }) => {
  return (
  <div className="collection-overview">
    {categories.map(({title,items}) => <CategoryPreview key={title} title={title} description={'See more'} items={items} />)}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  categories:selectShopCategoriesForPreview
});

export default connect(mapStateToProps)(CategoryOverview);