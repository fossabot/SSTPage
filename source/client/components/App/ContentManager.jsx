import React from 'react'
import { matchPath, withRouter } from 'react-router'

import Layout from '../Layout/Layout'

import routerInfo from '../../../modules/routing'

class ContentManager extends React.Component{
  render(){
    let match, matchedRouter, matchedComponent, matchedLayout;

    matchedRouter = routerInfo.find(i => {
      match = matchPath(this.props.location.pathname, i);

      return match
    });

    matchedComponent = React.createElement(matchedRouter.component, {
      match: match,
      routerInfo: matchedRouter,
    });

    matchedLayout = matchedRouter.component.getLayout 
                    ? matchedRouter.component.getLayout()
                    : {title:'', background: null};

    return (
      <Layout title={matchedLayout.title} background={matchedLayout.background} component={matchedComponent} />
    )
  }
}

export default withRouter(ContentManager)