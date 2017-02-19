import React from 'react';

const Project = ({images=[], name='', description=''}) => {
  return (
    <div className={'project-container'}>

      <div className={'project-info'}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Project;