import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import faker from 'faker';

class About extends Component {
  render() {
    return (
      <div>
        <ContentFrame title={"About"}>
          <p>Caleb Sawtell is a designer & developer based Wellington, New Zealand. <br/>I love crafting delightful interactive experiences.</p>
          <h4 className={"subheading"}>Skills</h4>
          <div className={"skills-container"}>
            <ul>
              <li><b>Web Technologies</b></li>
              <li>HTML & CSS</li>          
              <li>Javascript / ES6</li>
              <li>React & Redux</li>
              <li>Ember.js</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <li><b>Design</b></li>
              <li>Interface Design</li>
              <li>UX Design</li>
              <li>Web Design</li>
              <li>Typography</li>
              <li>Animation</li>
              <li>Game Design</li>       
            </ul>
            <ul>
              <li><b>Design Tools</b></li>
              <li>Sketch</li>
              <li>Photoshop</li> 
              <li>Illustrator</li>
              <li>Indesign</li>                 
              <li>Blender3d</li>
              <li>Unity3d</li>                                              
            </ul>
          </div>
        </ContentFrame>
      </div>
    );
  }
}

export default About;