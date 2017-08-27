import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import List from 'material-ui/List'

import PublicationListItem from './PublicationListItem'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/PublicationList.less'

class PublicationList extends React.Component{
  render(){
    return (
      <Paper elevation={4} className="publication_list_wrap content_wrap">
        <Helmet>
          <title>学术论文 - {this.props.configuration.title.CHN}</title>
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

PublicationList.getLayout = () => ({
  title: "学术论文",
  background: require('./images/background.jpg'),
})

export default withConfiguration(ssr(PublicationList))