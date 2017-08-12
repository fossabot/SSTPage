import React from 'react'

import './stylesheets/SmallLoading.less'

class SmallLoading extends React.Component{
  render(){
    return (
      <div className="small_loading_wrap">
        <div className="small_loading_container">
          <div className="small_loading_1 small_loading_side"></div>
          <div className="small_loading_2"></div>
          <div className="small_loading_3 small_loading_side"></div>
        </div>
      </div>
    )
  }
}

export default SmallLoading