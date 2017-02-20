import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import Project from '../components/project'
import ProjectContainer from '../components/project-container';
import { config } from 'config'
import Helmet from 'react-helmet'
import simoneJourneyMap from '../assets/screenshots/simone/simone-journey-map.png'
class Work extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Work`}
        />
        <ContentFrame title={"Work"}>
          <ProjectContainer>
            <Project images={[simoneJourneyMap]} name={"Simone"} description={"Simone simulates the New Zealand population and how they intereact with our clients services. My role was to create a frontend for this simulator that is consumable and usable by non data scientists."}/>
            <Project name={"Tesseract"} description={""}/>
            <Project name={"Blume"} description={""}/>
            <Project name={"Gust"} description={"An experiment in building a custom hardware controller for a unity game. I used an IR sensor hooked up to an Arduino and wrote a little bridging program in processing to take the data from the arduino and send it to unity. I then made a little demo game to go along with this custom hardware."}/>
          </ProjectContainer>
        </ContentFrame>
      </div>
    );
  }
}

export default Work;