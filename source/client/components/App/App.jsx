import React from 'react'
import { Route } from 'react-router'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'

import injectTapEventPlugin from 'react-tap-event-plugin'

import Layout from '../Layout/Layout'

import '../../modules/normalize.css'
import '../../modules/main.less'

class App extends React.Component{
  constructor(props){
    super(props)

    if(this.props.serverRequest) 
      theme.userAgent = this.props.serverRequest.headers['user-agent'];
  }
 
  componentDidMount(){
    injectTapEventPlugin();
  }

  getChildContext() {
    return {
      pageData: this.props.pageData,
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Route path="/" exact children={({ match }) => <Layout match={match} />} />
      </MuiThemeProvider>
    )
  }
}

App.childContextTypes = {
  pageData: PropTypes.object,
};

export default App;