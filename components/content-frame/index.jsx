import React, { Component } from 'react';
import './style.css'

class ContentFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX:0,
      mouseY:0,
      windowWidth:1024,
      windowHeight:768,
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove(e){
    this.setState(
      {
        mouseX:e.clientX,
        mouseY:e.clientY
      }
    )
  }
  componentDidMount() {
    this.setState({windowWidth:window.outerWidth, windowHeight:window.outerHeight})
    window.addEventListener("mousemove",this.handleMouseMove)
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove",this.handleMouseMove)    
  }
  calculateOffset(mouseX, mouseY, maxOffsetAmount = 2){
    const halfWindowWidth = this.state.windowWidth / 2
    const halfWindowHeight = this.state.windowHeight / 2
    const x =  ((mouseX - halfWindowWidth) / halfWindowWidth) * maxOffsetAmount
    const y =  ((mouseY - halfWindowHeight) / halfWindowHeight) * maxOffsetAmount
    return({x,y})
  }
  render() {
    const offset = this.calculateOffset(this.state.mouseX,this.state.mouseY)
    const offsetStyle = {transform:`translate(${offset.x}px, ${offset.y}px)`}
    return (
      <div className={"frame"}>
        <span 
          className={'frame-edge-left'}
          style={offsetStyle}
        >
        </span>
        {this.props.title ? <h2 style={offsetStyle} className={'frame-title'}>{this.props.title}</h2>: ''}
        {this.props.children}
        <span 
          className={'frame-edge-right'}
          style={offsetStyle}
        >
        </span>        
      </div>
    );
  }
}

export default ContentFrame;