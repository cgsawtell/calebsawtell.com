import React, { Component } from 'react';
import ContentFrame from '../components/content-frame';
import FlexContainer from '../components/flex-container'
import { config } from 'config'
import Helmet from 'react-helmet'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      message:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  handleChange(e){
    let updatedField = {}
    updatedField[e.target.name] = e.target.value
    this.setState(updatedField)
  }
  render() {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} - Contact`}
        />
        <ContentFrame title={"Contact"}>
          <FlexContainer>
            <form onSubmit={e => { this.handleSubmit(e) }}>
              <label htmlFor={"name"}>Name</label>
              <input id="name" name={'name'} type="text" onChange={e => this.handleChange(e)}/>
              <label htmlFor={"email"}>Email</label>
              <input id="email" name={'email'} type="email" onChange={e => this.handleChange(e)}/>
              <label htmlFor={"message"}>Message</label>
              <textarea name="message" id="message" onChange={e => this.handleChange(e)}></textarea>
              <input type="submit" value={"Send Message"}/>
            </form>
          </FlexContainer>
        </ContentFrame>
      </div>
    );
  }
}

export default Contact;