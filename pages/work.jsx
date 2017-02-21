import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import Project from '../components/project'
import ProjectContainer from '../components/project-container';
import { config } from 'config'
import Helmet from 'react-helmet'
import simoneJourneyMap from '../assets/screenshots/simone/simone-journey-map.png'
import simoneSimulate from '../assets/screenshots/simone/simone-simulate.png'
import simoneDashboard from '../assets/screenshots/simone/simone-dashboard.png'

class Work extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} - Work`}
        />
        <ContentFrame title={"Work"}>
          <ProjectContainer>
            <Project images={[simoneJourneyMap, simoneDashboard,simoneSimulate]} name={"Simone"} description={"Simone simulates the New Zealand population and how they intereact with our clients services. My role was to create a frontend for this simulator that is consumable and usable by non data scientists."}/>
            <Project name={"Tesseract"} description={`Tesseract is a prototype stakeholder management tool. The design for tesseract was inspired by fictional UI's seen in movies like "The Martian" and "James Bond". We were trying to make the user feel like a badass and the tool look high tech`}/>
            <Project name={"Blume"} vimeoId={'78698194'} description={`Blume is an explorative, narrative-driven game focusing on retrograde amnesia and the impact it has on relationships. Entering the world of Blume, the player navigates through the darkness with their ethereal light companion, exploring the landscape in search of lost memories.`}/>
            <Project name={"Gust"} vimeoId={'203911242'} description={"An experiment in building a custom hardware controller for a unity game. I used an IR sensor hooked up to an Arduino and wrote a little bridging program in processing to take the data from the arduino and send it to unity. I then made a little demo game to go along with this custom hardware."}/>
          </ProjectContainer>
        </ContentFrame>
      </div>
    );
  }
}

export default Work;