import React from 'react'

import injectTapEventPlugin from 'react-tap-event-plugin'

import Router from '../Layout/Router'

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
      <Router />
    )
  }
}

export default App