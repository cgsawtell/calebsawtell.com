import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import faker from 'faker';
class About extends Component {
  render() {
    return (
      <div>
        <ContentFrame title={"About"}>
          <p>{faker.lorem.sentences(5)}</p>
          <p>{faker.lorem.sentences(5)}</p>          
        </ContentFrame>
      </div>
    );
  }
}

export default About;