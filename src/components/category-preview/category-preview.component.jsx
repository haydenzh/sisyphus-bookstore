import React from 'react';

import './category-preview.styles.scss';

import CategoryItem from '../category-item/category-item.component';
import { withRouter } from 'react-router-dom';

const CategoryPreview = ({title,description,items,history}) => (
  <div className="category-preview">
    <div>
      <h2 className="title" onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>{title}</h2>
      { description ? <span className="description">{description}</span> : null }
    </div>
    <div className="category-items">
      {
        items
          .filter((item,index)=> index <= 4 )
          .map(item => <CategoryItem key={item.id} item={item}/>)
      }
    </div>
  </div>
);


export default withRouter(CategoryPreview);