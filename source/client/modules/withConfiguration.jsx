import React from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatic from 'hoist-non-react-statics'

const withConfiguration = (ComposedComponent) => {
  class WCC extends React.Component{
    render(){
      return <ComposedComponent {...this.props} configuration={this.context.siteConfiguration || window.__siteConfiguration} />
    }
  }

  WCC.contextTypes = {
    siteConfiguration: PropTypes.object
  }

  hoistNonReactStatic(WCC, ComposedComponent);

  return WCC
};

export default withConfiguration