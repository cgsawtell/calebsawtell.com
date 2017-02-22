import React, { Component } from 'react';
import './style.css';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject : 0
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
     
  }
  handleNext(){
    const finalIndex = this.props.children.length - 1
    const currentProject = this.state.currentProject
    const nextIndex = currentProject === finalIndex ? 0 : currentProject + 1
    this.setState({currentProject:nextIndex});
  }
  handlePrevious(){
    const finalIndex = this.props.children.length - 1
    const currentProject = this.state.currentProject
    const nextIndex = currentProject === 0 ? finalIndex : currentProject - 1
    this.setState({currentProject:nextIndex});
  }
  render() {
    return (
      <div>
        {
          this.props.children.map(
            (project, i) => {
              return <project.type {...project.props} visible={i===this.state.currentProject}/>
            }
          )
        }
        <footer className={'project-container-footer'}>
          <button onClick={this.handlePrevious}>Previous</button>
          <p>{this.state.currentProject+1} of {this.props.children.length}</p>
          <button onClick={this.handleNext}>Next</button>
        </footer>
      </div>
    );
  }
}

export default ProjectContainer;