import React from 'react';

const Project = ({images=[], title='', description=''}) => {
  return (
    <div className={'project-container'}>
      
      <div className={'project-info'}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;