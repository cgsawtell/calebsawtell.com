import React, { Component } from 'react';
import './style.css'
import backgroundCheckers from "../../assets/background-checkers.svg";
// import ThreeDee from '../three-dee';

class BackgroundVisualisation extends Component {
  render() {
    return (
      <div className={"background-visualisation"} style={{backgroundImage:`url(${backgroundCheckers})`}}>
        {/*<ThreeDee/>*/}
        <div className={"background-glow"}>
        </div>
      </div>
    );
  }
}

export default BackgroundVisualisation;