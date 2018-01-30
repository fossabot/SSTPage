import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

import Paper from 'material-ui/Paper'

import FaceList from '../Face/FaceList'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/Article.less'

class Article extends React.Component{
  constructor(props) {
    super(props);

    this.description = props.pageData.content.replace(/<[^>]+>/g,'').substring(0, 150);
  }

  render(){
    return (
      <Paper elevation={4} className="article_page">
        <Helmet>
          <title>{this.props.pageData.title} - {this.props.configuration.title.CHN}</title>
          <meta name="description" content={this.description} />
          <meta property="og:description" content={this.description} />
          <meta property="og:title" content={this.props.pageData.title} />
          <meta property="og:type" content="article" />
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