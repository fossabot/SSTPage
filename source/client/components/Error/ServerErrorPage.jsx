import React from 'react'

import { Helmet } from 'react-helmet'

import ErrorPage from './ErrorPage'

class ServerErrorPage extends React.Component{
  render(){
    return (
      <ErrorPage icon="😵" title="我们遇到了一些麻烦" message={this.props.message} />
    )
  }
}

ServerErrorPage.getLayout = () => ({
  title: "错误",
  background: require('./images/background.jpg'),
})

export default ServerErrorPage