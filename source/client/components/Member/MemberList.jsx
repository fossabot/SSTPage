import React from 'react'

import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import MemberListUnit from './MemberListUnit'

import ssr from '../../modules/ssrComponent'

import './stylesheets/MemberList.less'

class MemberList extends React.Component{
  componentDidMount() {
    this.props.switchBackground('团队成员', require('./images/background.jpg'));
  }

  constructMemberUnit(group) {
    return this.props.pageData[group].map(member => (
        <MemberListUnit key={member.__fileName}
                        faceImage={member.image} name={member.name}
                        title={member.title} researchDirection={member.researchDirection} />
      ))
  }

  render(){
    return (
      <Paper elevation={4} className="content_wrap member_list_wrap">
        <section>
          <h2 className="member_list_title">PI组成员</h2>
          <Grid container className="member_list">
            {this.constructMemberUnit('T')}
          </Grid>
        </section>
        <section>
          <h2 className="member_list_title">导师组成员</h2>
          <Grid container className="member_list">
            {this.constructMemberUnit('S')}
          </Grid>
        </section>
        <section>
          <h2 className="member_list_title">已毕业成员</h2>
          <Grid container className="member_list">
            {this.constructMemberUnit('G')}
          </Grid>
        </section>
      </Paper>
    )
  }
}

export default ssr(MemberList, '/api/member/list')