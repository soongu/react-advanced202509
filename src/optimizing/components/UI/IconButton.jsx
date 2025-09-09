import React from 'react';
import { log } from '../../log';

const IconButton = ({ children, icon, ...props }) => {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button
      {...props}
      className='button'>
      <Icon className='button-icon' />
      <span className='button-text'>{children}</span>
    </button>
  );
};
export default IconButton;
