import React from 'react'
import { Route } from 'react-router'
import { Helmet } from 'react-helmet'

import TopSection from './TopSection'

import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/Layout.less'

class Layout extends React.Component{  
  render(){
    const year = new Date().getFullYear();
    const {title, background} = this.props;

    return (
      <div>
        <Helmet>
          <title>{this.props.configuration.title.CHN}</title>
        </Helmet>
        <Route path="/" exact children={({ match }) => <TopSection match={match} background={background} title={title} />} />
        <div className="page_content">
          {this.props.component}
        </div>
        <footer className="bottom_section">
          <div className="logo">
            <img src={require('./images/footerLogo.png')} alt="logo of BNU and our lab." />
          </div>
          <div className="info">
            <p>©2016-{year} {this.props.configuration.title.CHN}</p>
            <p>©2016-{year} {this.props.configuration.title.ENG}</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default withConfiguration(Layout)