import React from 'react'
import { Route } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin'

import ContentManager from './ContentManager'

import '../../modules/normalize.css'
import '../../modules/main.less'

class App extends React.Component{
  componentDidMount(){
    const jssStyles = document.getElementById('jss-server-side');
    
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);

    injectTapEventPlugin();
  }

  render() {
    return (
      <Route path="**">
        <ContentManager />
      </Route>
    )
  }
}

export default App