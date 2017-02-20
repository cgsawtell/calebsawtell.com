import React from 'react';

const Project = ({images=[], name='', description=''}) => {
  return (
    <div className={'project-container'}>
      <div>
        <img src={images[0]}/>
      </div>
      <div className={'project-info'}>
        <h3 className={'project-name'}>{name}</h3>
        <p className={'project-description'}>{description}</p>
      </div>
    </div>
  );
};

export default Project;