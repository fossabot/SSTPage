import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

import Paper from 'material-ui/Paper'

import FaceList from '../Face/FaceList'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/Article.less'

class Article extends React.Component{
  render(){
    return (
      <Paper elevation={4} className="article_page">
        <Helmet>
          <title>{this.props.pageData.title} - {this.props.configuration.title.CHN}</title>
        </Helmet>
        <h3>
          {this.props.pageData.title}
        </h3>
        <FaceList showName withCard listContent={this.props.pageData.authors} />
        <article className="common_article" dangerouslySetInnerHTML={{__html: this.props.pageData.content}}></article>
      </Paper>
    )
  }
}

Article.getLayout = () => ({
  title: "文章",
  background: require('./images/background.jpg'),
})

export default withConfiguration(ssr(Article))