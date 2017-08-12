import React from 'react'
import PropTypes from 'prop-types'

class Provider extends React.Component{
  getChildContext() {
    return {pageData: {data: this.props.pageData || null}};
  }

  render(){
    return this.props.children
  }
}

Provider.childContextTypes = {
  pageData: PropTypes.object
}

export default Provider