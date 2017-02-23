import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import FlexContainer from '../components/flex-container'
import { config } from 'config'
import Helmet from 'react-helmet'

class About extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} - About`}
        />
        <ContentFrame title={"About"}>
        <FlexContainer>
            <div>
              <p>Caleb Sawtell is a designer & developer based Wellington, New Zealand. I love crafting delightful interactive experiences.</p>
            </div>
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
        </FlexContainer>
        </ContentFrame>
      </div>
    );
  }
}

export default About;