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
      <Paper elevation={4} className="paper_wrap content_wrap publication_list_wrap">
        <Helmet>
          <title>学术论文 - {this.props.configuration.title.CHN}</title>
          <meta name="description" content="此页面列出了我们团队往年发表的全部学术论文及其作者的信息，通过这个页面您可以了解我们课题组过往探讨过的所有学术问题。" />
          <meta property="og:title" content="学术论文" />
          <meta property="og:type" content="website" />
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