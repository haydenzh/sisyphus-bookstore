import React from 'react';

import './category-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

const CategoryItem = ({ item,addItem }) => {
  const { imageUrl,name,author,cover,price } = item;
  return (
    <div className="category-item">
      <div className="item-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="author">By {author}</div>
        <div className="cover">{cover}</div>
        <div className="price">${price}</div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem:(item) => dispatch(addItem(item))  
});

export default connect(null,mapDispatchToProps)(CategoryItem);