import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import List from 'material-ui/List'

import A from '../A/A'
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
            <A to={`/publication/${item.__fileName}`} key={item.__fileName} >
              <PublicationListItem id={item.__fileName} icon={item.icon} jornal={item.jornal}
                                   title={item.title} year={item.year} authors={item.authors} />
            </A>
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