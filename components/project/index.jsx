import React from 'react';
import Vimeo from 'react-vimeo';
import '../../node_modules/react-vimeo/lib/Vimeo.min.css'
import './style.css'
const Project = ({images=[], name='', description='', vimeoId=''}) => {
  return (
    <div className={'project-container'}>
      <div className={'image-container'}>
        {vimeoId ? <Vimeo videoId = { vimeoId } /> : <img src={images[0]}/>}
      </div>
      <div className={'project-info'}>
        <h3 className={'project-name'}>{name}</h3>
        <p className={'project-description'}>{description}</p>
      </div>
    </div>
  );
};

export default Project;