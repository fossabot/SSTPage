import React from 'react'

import { Helmet } from 'react-helmet'

import ErrorPage from './ErrorPage'

class NotFoundPage extends React.Component{
  render(){
    return (
      <ErrorPage icon="😯" title="找不到页面" message="哦我亲爱的上帝啊，看起来你在找的页面并不存在" />
    )
  }
}

NotFoundPage.getLayout = () => ({
  title: "错误",
  background: require('./images/background.jpg'),
})

export default NotFoundPage