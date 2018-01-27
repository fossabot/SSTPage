import React from 'react'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import MemberListUnit from './MemberListUnit'

import ssr from '../../modules/ssrComponent'
import TutorIntroduction from './TutorIntroduction'

import './stylesheets/MemberList.less'

class MemberList extends React.Component{
  constructMemberUnit(group) {
    return this.props.pageData[group].map(member => (
        <MemberListUnit key={member.__fileName}
                        faceImage={member.image} name={member.name} email={member.email} homepage={member.homepage}
                        title={member.title} researchDirection={member.researchDirection} />
      ))
  }

  render(){
    return (
      <Paper elevation={4} className="content_wrap member_list paper_wrap">
        <Helmet>
          <title>团队成员 - 人际间语言交流的脑活动同步机制课题</title>
          <meta name="description" content="此页面列出了我们团队所有成员的研究方向、联系方式、相片等信息的概况，您可以通过这个页面了解本课题组的成员情况。" />
          <meta property="og:title" content="团队成员" />
          <meta property="og:type" content="website" />
        </Helmet>
        <section>
          <h2 className="paper_title">导师介绍</h2>
          <TutorIntroduction>
            <div dangerouslySetInnerHTML={{__html: this.props.pageData.tutorIntroduction}}></div>
          </TutorIntroduction>
        </section>
        <section>
          <h2 className="paper_title">导师组成员</h2>
          <Grid container className="member_group_list">
            {this.constructMemberUnit('S')}
          </Grid>
        </section>
        <section>
          <h2 className="paper_title">已毕业成员</h2>
          <Grid container className="member_group_list">
            {this.constructMemberUnit('G')}
          </Grid>
        </section>
      </Paper>
    )
  }
}

MemberList.getLayout = () => ({
  title: "团队成员",
  background: require('./images/background.jpg'),
})

export default ssr(MemberList)