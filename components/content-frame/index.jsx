import React, { Component } from 'react';
import './style.css'

class ContentFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX:0,
      mouseY:0
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
    window.addEventListener("mousemove",this.handleMouseMove)
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove",this.handleMouseMove)    
  }
  calculateOffset(mouseX, mouseY, maxOffsetAmount = 2){
    const halfWindowWidth = window.outerWidth / 2
    const halfWindowHeight = window.outerHeight / 2
    const x =  ((mouseX - halfWindowWidth) / halfWindowWidth) * maxOffsetAmount
    const y =  ((mouseY - halfWindowHeight) / halfWindowHeight) * maxOffsetAmount
    return({x,y})
  }
  render() {
    const offset=this.calculateOffset(this.state.mouseX,this.state.mouseY)
    return (
      <div className={"frame"}>
        <span 
          className={'frame-edge-left'}
          style={
            {
                transform:`translate(${offset.x}px, ${offset.y}px)`,
            }
          }
        >
        </span>
        {this.props.children}
        <span 
          className={'frame-edge-right'}
          style={
            {
                transform:`translate(${offset.x}px, ${offset.y}px)`,
            }
          }
        >
        </span>        
      </div>
    );
  }
}

export default ContentFrame;