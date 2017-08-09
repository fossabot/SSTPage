import React from 'react'

import ssr from '../../modules/ssrComponent'

import List from 'material-ui/List';
import PublicationListItem from './PublicationListItem'

import './stylesheets/PublicationList.less'

class Publication extends React.Component{
  componentDidMount() {
    this.props.switchBackground('学术论文', require('./images/background.jpg'));
  }

  render(){
    return (
      <div>
        <List className="publication_list content_wrap">
          { this.props.pageData.map(item => (
            <PublicationListItem key={item.__fileName} id={item.__fileName} 
                                 icon={item.icon} journal={item.journal}
                                 title={item.title} year={item.year} authors={item.authors} />
            )) }
        </List>
      </div>
    )
  }
}

export default ssr(Publication, '/api/publication/list')