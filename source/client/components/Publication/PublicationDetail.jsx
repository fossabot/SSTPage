import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'

import FaceList from '../Face/FaceList'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/publicationDetail.less'

class PublicationDetail extends React.Component{
  constructor(props) {
    super(props);

    this.description = props.pageData.abstract.replace(/<[^>]+>/g,'').substring(0, 150);
  }

  downloadPDF() {
    const emulatedLink = document.createElement('a');
    emulatedLink.setAttribute('href', `/assets/user/publication/pdf/${this.props.pageData.pdf}`);
    emulatedLink.setAttribute('download', `${this.props.pageData.title}.pdf`);
    emulatedLink.click();
  }

  render(){
    return (
      <div className="content_wrap publication_detail">
        <Helmet>
          <title>{this.props.pageData.title} - {this.props.configuration.title.CHN}</title>
          <meta name="description" content={this.description} />
          <meta property="og:description" content={this.description} />
          <meta property="og:title" content={this.props.pageData.title} />
          <meta property="og:type" content="article" />
          <script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
        </Helmet>
        <div className="publication_title_wrap">
          <div className="publication_title">
            <h3> {this.props.pageData.title} <span className="year">{this.props.pageData.year}</span></h3>
            <div className="authors">
              <FaceList showName withCard size="extra-small" listContent={this.props.pageData.authors} />
            </div>
          </div>
        </div>
        <Grid container spacing={24}>
          <Grid item md={9} xs={12} className="main_grid">
            <Paper>
              <div className="abstract">
                <h4>摘要</h4>
                {this.props.pageData.abstract}
              </div>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12} className="side_grid">
            <Paper>
              <div className="journal_logo">
                <img src={`/assets/user/images/journalLogo/${this.props.pageData.logo}`} 
                     alt={`The logo of ${this.props.pageData.journal}`}/>
              </div>
              <p className="journal_name">{this.props.pageData.journal}</p>
            </Paper>
            <Button raised className="download_warp" onClick={this.downloadPDF.bind(this)}>
              <div className="download_icon">
                <img className="download_icon_arrow" src={require('./images/download_arrow.svg')} />
                <img src={require('./images/download_bottom.svg')} />
              </div>
              <div className="download_text">
                <p className="main">下载 PDF 文稿</p>
              </div>
            </Button>
            <Paper>
              <div data-badge-details="right" data-badge-type="large-donut" 
                   data-doi={this.props.pageData.doi} 
                   className="altmetric-embed"></div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

PublicationDetail.getLayout = () => ({
  title: "学术论文",
  background: require('./images/background.jpg'),
})

export default withConfiguration(ssr(PublicationDetail))