import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import Project from '../components/project'
import { config } from 'config'
import Helmet from 'react-helmet'

class Work extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Work`}
        />
        <ContentFrame title={"Work"}>
          <Project name={"Simone"} description={"Simone simulates the New Zealand population and how they intereact with our clients services. My role was to create a frontend for this simulator that is consumable and usable by non data scientists."}/>
          <Project name={"Tesseract"} description={""}/>
          <Project name={"Blume"} description={""}/>
          <Project name={"Gust"} description={"An experiment in building a custom hardware controller for a unity game. I used an IR sensor hooked up to an Arduino and wrote a little bridging program in processing to take the data from the arduino and send it to unity. I then made a little demo game to go along with this custom hardware."}/>
        </ContentFrame>
      </div>
    );
  }
}

export default Work;