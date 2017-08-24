import React from 'react'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import List from 'material-ui/List'

import PublicationListItem from './PublicationListItem'

import ssr from '../../modules/ssrComponent'

import './stylesheets/PublicationList.less'

class Publication extends React.Component{
  componentDidMount() {
    this.props.switchBackground('学术论文', require('./images/background.jpg'));
  }

  render(){
    return (
      <Paper elevation={4} className="publication_list_wrap content_wrap">
        <Helmet>
          <title>学术论文 - 人际间语言交流的脑活动同步机制课题</title>
        </Helmet>
        <List className="publication_list">
          { this.props.pageData.map(item => (
            <PublicationListItem key={item.__fileName} id={item.__fileName} 
                                 icon={item.icon} jornal={item.jornal}
                                 title={item.title} year={item.year} authors={item.authors} />
            )) }
        </List>
      </Paper>
    )
  }
}

export default ssr(Publication)