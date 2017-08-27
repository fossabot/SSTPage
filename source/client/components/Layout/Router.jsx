import React from 'react'
import { Route } from 'react-router'

import ContentManager from './ContentManager'

class Router extends React.Component{
  render(){
    return (
      <Route path="**">
        <ContentManager />
      </Route>
    )
  }
}

export default Router