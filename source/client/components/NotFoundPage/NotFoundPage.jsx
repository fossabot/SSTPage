import React from 'react'

import './stylesheets/NotFoundPage.less'

class NotFoundPage extends React.Component{
  componentDidMount() {
    this.props.switchBackground('错误', require('./images/background.jpg'));
  }

  render(){
    return (
      <div className="not_found">
        <div className="icon">😯</div>
        <div className="info">
          <h2>哦我亲爱的上帝啊</h2>
          <p>看起来你在找的页面并不存在</p>
        </div>
      </div>
    )
  }
}

export default NotFoundPage