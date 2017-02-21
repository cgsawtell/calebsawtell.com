import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Navigation from '../components/navigation'
import BackgroundVisualisation from '../components/background-visualisation'
import '../css/markdown-styles'
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
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
              position: 'relative'
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              
            </Link>
            <Navigation pathname={this.props.location.pathname} navItems={[{title:'Home',pathname:'/'},{title:'About',pathname:'/about/'},{title:'Work',pathname:'/work/'},{title:'Contact',pathname:'/contact/'}]}/>
          </Container>
        </Headroom>
        <BackgroundVisualisation/>
        <Container
          className={"content-container"}
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
