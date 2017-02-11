import React, { Component } from 'react';
import './style.css'

class ContentFrame extends Component {

  render() {
    return (
      <div ref={ (element) => { this._element = element}} className={"frame"}>
        <span className={'frame-edge-left'}></span>
        {this.props.children}
        <span className={'frame-edge-right'}></span>        
      </div>
    );
  }
}

export default ContentFrame;