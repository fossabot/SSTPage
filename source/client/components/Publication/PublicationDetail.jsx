import React from 'react'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import FaceList from '../Face/FaceList'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

import ssr from '../../modules/ssrComponent'

import './stylesheets/publicationDetail.less'

class PublicationDetail extends React.Component{
  constructor(props) {
    super(props)

    this.publicationId = props.params.id;
  }

  componentDidMount() {
    this.props.switchBackground('学术论文', require('./images/background.jpg'));
  }

  render(){
    return (
      <div className='publication_detail content_wrap'>
        <Helmet>
          <script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
        </Helmet>
        <h3> {this.props.pageData.title} <span className="year">{this.props.pageData.year}</span></h3>
        <div className="authors">
          <FaceList showName withCard size="extra-small" listContent={this.props.pageData.authors} />
        </div>
        <Grid container spacing={24}>
          <Grid item md={9} xs={12} className="main_grid">
            <Paper>
              <div className="abstract">
                <h4>Abstract</h4>
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
            <Paper>
              <div className="download_warp">
                <div className="download_icon">
                  <img className="download_icon_arrow" src={require('./images/download_arrow.svg')} />
                  <img src={require('./images/download_bottom.svg')} />
                </div>
                <div className="download_text">
                  <p className="main">Download PDF</p>
                </div>
              </div>
            </Paper>
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

export default ssr(PublicationDetail, `/api/publication/detail/%id%`, ['id'])