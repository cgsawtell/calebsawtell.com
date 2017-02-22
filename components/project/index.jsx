import React from 'react';
import Vimeo from 'react-vimeo';
import '../../node_modules/react-vimeo/lib/Vimeo.min.css'
import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import './style.css'

const Project = ({images=[], name='', description='', vimeoId='', visible=true}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let ImageSlider = ''

  if(images.length){
    if( process.title === "node" ){ 
      ImageSlider = <img src={ images[0]}/> 
    }
    else {
      ImageSlider = <Slider {...settings}>
        {
          images.map( image => ( <img src={image}/>  ) )
        }
      </Slider>
    }
  }
  const style = {
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? 'auto' : 'none'
  }
  return (
    <div className={'project'} style={style}>
      <div className={'image-container'}>
        {vimeoId ? <Vimeo videoId = { vimeoId } /> : ImageSlider}
      </div>
      <div className={'project-info'}>
        <h3 className={'project-name'}>{name}</h3>
        <p className={'project-description'}>{description}</p>
      </div>
    </div>
  );
};

export default Project;