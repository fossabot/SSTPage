import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/ErrorPage.less'

class ErrorPage extends React.Component{
  render(){
    return (
      <div className="not_found">
        <Helmet>
          <title>{this.props.title} - {this.props.configuration.title.CHN}</title>
        </Helmet>
        <div className="icon">{this.props.icon}</div>
        <div className="info">
          <h2>{this.props.title}</h2>
          <p>{this.props.message}</p>
        </div>
      </div>
    )
  }
}

export default withConfiguration(ErrorPage)