import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children,inverted,className,onClick,otherProps}) => {
  return (
    <button  className={`${inverted ? 'inverted' : ''} custom-button ${className}`} onClick={onClick} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;

