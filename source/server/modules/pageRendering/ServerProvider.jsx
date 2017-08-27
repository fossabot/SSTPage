import React from 'react'
import PropTypes from 'prop-types'

class ServerProvider extends React.Component{
  getChildContext() {
    return {
      pageData: {data: this.props.pageData || null}, 
      siteConfiguration: this.props.siteConfiguration,
    };
  }

  render(){
    return this.props.children
  }
}

ServerProvider.childContextTypes = {
  pageData: PropTypes.object,
  siteConfiguration: PropTypes.object,
}

export default ServerProvider