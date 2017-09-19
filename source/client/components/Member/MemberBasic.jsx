import React from 'react'

import './stylesheets/MemberBasic.less'

class MemberBasic extends React.Component{
  render(){
    return (
      <div className="member_basic">
        <div className="member_photo">
          <img src={`/assets/user/images/face/${this.props.faceImage}`} alt={`A photo of ${this.props.name}`} />
        </div>
        <div className="information">
          <p className="name_line">
            <span className="name">{this.props.name}</span>
            <span className="title">{this.props.title}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default MemberBasic