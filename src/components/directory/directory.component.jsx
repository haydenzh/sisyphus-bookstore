import React from 'react';

import MenuItem from '../../components/menu-item/menu-item.component';

import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import './directory.styles.scss';

const Directory = ({sections}) => {
  console.log('rendered.');
  return (
    <div className="directory-menu">
      {sections.map(({id,title,imageUrl,linkUrl,size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size}/>)}
    </div>
  );
}

const mapStateToProps = state => ({
  sections:selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);