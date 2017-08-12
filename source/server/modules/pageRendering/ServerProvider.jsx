import React from 'react'
import PropTypes from 'prop-types'

class ServerProvider extends React.Component{
  getChildContext() {
    return {pageData: {data: this.props.pageData || null}};
  }

  render(){
    return this.props.children
  }
}

ServerProvider.childContextTypes = {
  pageData: PropTypes.object
}

export default ServerProvider