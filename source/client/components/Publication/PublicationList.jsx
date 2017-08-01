import React from 'react'

import fetchJson from '../../../modules/fetchJson'
import ssr from '../../modules/ssrComponent'

import PublicationListItem from './PublicationListItem'
import AnimatedMaskBackground from '../AnimatedMaskBackground/AnimatedMaskBackground'
import './stylesheets/PublicationList.less'

class Publication extends React.Component{
  constructor(props){
    super(props)
    
    this.state = props.pageData;
    if(!this.state.publicationList) this.state.publicationList = [];
  }

  componentDidMount() {
    if(!window.__directMark)
      fetchJson('/api/publication/list').then(data => this.setState(data))
    
      this.props.switchBackground('学术论文', <AnimatedMaskBackground src={require('./images/background.jpg')} />);
  }

  render(){
    return (
      <div>
        <ul className="publication_list">
          { this.state.publicationList.map(item => (
            <PublicationListItem key={item.__fileName} icon={item.icon} journal={item.journal}
                                 title={item.title} year={item.year} authors={item.authors} />
            )) }
        </ul>
      </div>
    )
  }
}

export default ssr(Publication)