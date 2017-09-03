import React from 'react'

import { Helmet } from 'react-helmet'

import ErrorPage from './ErrorPage'

class ServerErrorPage extends React.Component{
  render(){
    return (
      <ErrorPage icon="🚧" title="此页面正在被构建" message="开发人员正在构建此页面" />
    )
  }
}

ServerErrorPage.getLayout = () => ({
  title: "构建中",
  background: require('./images/constructing.jpg'),
})

export default ServerErrorPage