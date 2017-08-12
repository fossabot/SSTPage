import React from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'

import injectTapEventPlugin from 'react-tap-event-plugin'
import theme from './theme'

import Layout from '../Layout/Layout'

import '../../modules/normalize.css'
import '../../modules/main.less'

class App extends React.Component{
  componentDidMount(){
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Route path="/" exact children={({ match }) => <Layout match={match} />} />
      </MuiThemeProvider>
    )
  }
}

export default App;