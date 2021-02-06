import React from 'react';

import { connect } from 'react-redux';

import { selectCategoryById } from '../../redux/shop/shop.selector';

import './category-page.styles.scss';
import CategoryItem from '../../components/category-item/category-item.component';

const CategoryPage = ({ category }) => {
  if(!category){
    return <div>Loading...</div>
  }
  return (
  <div className="category-page">
    <h1 className="title">{category.title.toUpperCase()}</h1>
    <div className="category-items">
      {category.items.map(item => <CategoryItem key={item.id} item={item}/>)}
    </div>
  </div>
)};

const mapStateToProps = (state,ownProps) => {
  const id = ownProps.match.params.categoryId;
  return {
    category:selectCategoryById(id)(state)
  }
};

export default connect(mapStateToProps)(CategoryPage);