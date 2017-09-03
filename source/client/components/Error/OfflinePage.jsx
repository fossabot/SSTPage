import React from 'react'

import { Helmet } from 'react-helmet'

import ErrorPage from './ErrorPage'

class OfflinePage extends React.Component{
  render(){
    return (
      <ErrorPage icon="😵" title="无法连接到服务器" message="请检查您的网络连接是否存在异常" />
    )
  }
}

OfflinePage.getLayout = () => ({
  title: "错误",
})

export default OfflinePage