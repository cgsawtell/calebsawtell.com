import React from 'react';
import './style.css'

const FlexContainer = ({children}) => {
  return (
    <div className={'flex-container flex-fill-container'}>
      {children}
    </div>
  );
};

export default FlexContainer;