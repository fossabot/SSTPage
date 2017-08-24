import React from 'react'

import Paper from 'material-ui/Paper'

import FaceList from '../Face/FaceList'

import ssr from '../../modules/ssrComponent'

import './stylesheets/Article.less'

class Publication extends React.Component{
  componentDidMount() {
    this.props.switchBackground('文章', require('./images/background.jpg'));
  }

  render(){
    return (
      <Paper elevation={4} className="article_page">
        <h3>
          {this.props.pageData.title}
        </h3>
        <FaceList showName withCard listContent={this.props.pageData.authors} />
        <article dangerouslySetInnerHTML={{__html: this.props.pageData.content}}></article>
      </Paper>
    )
  }
}

export default ssr(Publication)