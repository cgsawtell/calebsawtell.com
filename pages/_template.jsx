import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Navigation from '../components/navigation'
import BackgroundVisualisation from '../components/background-visualisation'
import '../css/globals'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>     
        <Navigation pathname={this.props.location.pathname} navItems={[{title:'Home',pathname:'/'},{title:'About',pathname:'/about/'},{title:'Work',pathname:'/work/'},{title:'Contact',pathname:'/contact/'}]}/>
        <BackgroundVisualisation/>
        <div
          className={"content-container"}
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: '10vh',
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  },
})
