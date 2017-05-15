import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Caleb Sawtell is a Wellington based Designer & Frontend Developer"},
            {"name": "keywords", "content": "design, web development, new zealand, frontend, ui, ux, wellington"},
          ]}
        />
        <div className={'name-tag-container'}>
          <h1 className={"name"}>
            Caleb<br/>Sawtell
          </h1>
          <p className={"tag"}>Digital Designer &<br/> Frontend Developer</p>
        </div>
      </div>
    )
  }
}
