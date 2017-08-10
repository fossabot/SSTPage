import React from 'react'

import ssr from '../../modules/ssrComponent'

import Paper from 'material-ui/Paper'
import List from 'material-ui/List'

import PublicationListItem from './PublicationListItem'

import './stylesheets/PublicationList.less'

class Publication extends React.Component{
  componentDidMount() {
    this.props.switchBackground('学术论文', require('./images/background.jpg'));
  }

  render(){
    return (
      <Paper elevation={4} className="publication_list_wrap content_wrap">
        <List className="publication_list">
          { this.props.pageData.map(item => (
            <PublicationListItem key={item.__fileName} id={item.__fileName} 
                                 icon={item.icon} journal={item.journal}
                                 title={item.title} year={item.year} authors={item.authors} />
            )) }
        </List>
      </Paper>
    )
  }
}

export default ssr(Publication, '/api/publication/list')