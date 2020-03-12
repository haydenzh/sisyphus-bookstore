import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/category-overview/category-overview.component';
import CollectionPage from '../category-page/category-page.component';

import './shop.styles.scss';

const ShopPage = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
  </div>
);


export default ShopPage;