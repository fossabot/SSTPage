import React from 'react'

import MemberListUnit from './MemberListUnit'
import AnimatedMaskBackground from '../AnimatedMaskBackground/AnimatedMaskBackground'

import fetchJson from '../../../modules/fetchJson'
import ssr from '../../modules/ssrComponent'

import './stylesheets/MemberList.less'

class MemberList extends React.Component{
  constructor(props) {
    super(props)
    
    this.state = props.pageData;
    if(!this.state.memberList) this.state.memberList = [];
  }

  componentDidMount() {
    if(!window.__directMark) 
      fetchJson('/api/member/list').then(data => this.setState({memberList: data}));

    this.props.switchBackground('团队成员', <AnimatedMaskBackground src={require('./images/background.jpg')} />);
  }

  constructMemberUnit(group) {
    return this.state.memberList.filter(member => member.group === group)
                                .map(member => (
                                    <MemberListUnit key={member.__fileName}
                                                    faceImage={member.image} name={member.name}
                                                    title={member.title} researchDirection={member.researchDirection} />
                                  ))
  }

  render(){
    return (
      <div>
        <section>
          <h2 className="member_list_title">PI组成员</h2>
          <ul className="member_list">
            {this.constructMemberUnit('T')}
          </ul>
        </section>
        <section>
          <h2 className="member_list_title">导师组成员</h2>
          <ul className="member_list">
            {this.constructMemberUnit('S')}
          </ul>
        </section>
      </div>
    )
  }
}

export default ssr(MemberList)