import React from 'react'

import Grid from 'material-ui/Grid'

import Face from '../Face/Face'
import Button from 'material-ui/Button'

import EmailIcon from 'material-ui-icons/Email'
import HomeIcon from 'material-ui-icons/Home'

import './stylesheets/MemberListUnit.less'

class MemberListUnit extends React.Component{
  constructor(props) {
    super(props)

    this.email = props.email,
    this.homepage = props.homepage
  }

  sendEmail(){
    window.open(`mailto:${this.email}`);
  }

  openHomepage(){
    window.open(this.homepage);
  }
  
  clickLink(e) {
    e.preventDefault();
  }

  render(){
    return (
      <Grid item md={4} className="member_list_unit">
        <div className="member_list_unit_container">
          <div className="member_photo">
            <img src={`/assets/user/images/face/${this.props.faceImage}`} alt={`A photo of ${this.props.name}`} />
          </div>
          <div className="information">
            <p className="name_line">
              <span className="name">{this.props.name}</span>
              <span className="title">{this.props.title}</span>
            </p>
            <p className="study_direction">{this.props.researchDirection}</p>
          </div>
          <Grid container spacing={0} className="contact_buttons">
            <Grid item xs={6}>
              <Button disabled={!this.email} onClick={this.sendEmail.bind(this)}>
                <EmailIcon />邮件联系
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button disabled={!this.homepage} onClick={this.openHomepage.bind(this)}>
                <HomeIcon /><a href={this.homepage} target="_blank" onClick={this.clickLink}>学术首页</a>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default MemberListUnit