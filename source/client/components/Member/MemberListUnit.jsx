import React from 'react'

import Grid from 'material-ui/Grid'

import Face from '../Face/Face'
import Button from 'material-ui/Button'

import EmailIcon from 'material-ui-icons/Email'
import HomeIcon from 'material-ui-icons/Home'

class MemberListUnit extends React.Component{
  render(){
    return (
      <Grid item md={4} xs={12} className="member">
        <div className="member_photo">
          <img src={`/assets/user/images/face/${this.props.faceImage}`} alt={`A photo of ${this.props.name}`} />
        </div>
        <div className="information">
        <p className="name_line">
          <span className="name">{this.props.name}</span>
          <span className="title">{this.props.title}</span>
        </p>
        <p className="study_direction">{this.props.researchDirection}</p>
        <Grid container className="contact_buttons">
          <Grid item xs={6}>
            <Button><EmailIcon />邮件联系</Button>
          </Grid>
          <Grid item sm={6}>
            <Button><HomeIcon />学术首页</Button>
          </Grid>
        </Grid>
      </div>
      </Grid>
    )
  }
}

export default MemberListUnit