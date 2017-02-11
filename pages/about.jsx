import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
class About extends Component {
  render() {
    return (
      <div>
        <ContentFrame title={"About"}>
          <p>Poop</p>
        </ContentFrame>
      </div>
    );
  }
}

export default About;