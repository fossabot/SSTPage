import React from 'react'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import FaceList from '../Face/FaceList'
import AnimatedMaskBackground from '../AnimatedMaskBackground/AnimatedMaskBackground'

import fetchJson from '../../../modules/fetchJson'
import ssr from '../../modules/ssrComponent'

import './stylesheets/publicationDetail.less'

class PublicationDetail extends React.Component{
  constructor(props){
    super(props)
    
    this.state = props.pageData;
    if(!this.state.publicationDetail) this.state.publicationDetail = {};
  }

  componentDidMount() {
    if(!window.__directMark)
      fetchJson(`/api/publication/list/${this.props.params.id}`).then(data => this.setState(data));
    
      this.props.switchBackground('学术论文', <AnimatedMaskBackground src={require('./images/background.jpg')} />);
  }

  render(){
    return (
      <div className='publication_detail'>
        <Helmet>
          <script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script>
        </Helmet>
        <h3> {this.state.publicationDetail.title} <span className="year">{this.state.publicationDetail.year}</span></h3>
        <div className="authors">
          <FaceList faceSize="extra-small" showName={true} listContent={this.state.publicationDetail.authors} />
        </div>
        <Grid container gutter={24}>
          <Grid item md={9} xs={12}>
            <Paper>
              <div className="abstract">
                {this.state.publicationDetail.abstract}
              </div>
            </Paper>
          </Grid>
          <Grid item md={3}  xs={12}>
            <Paper>
              <div className="journal_logo">
                <img src={`/assets/user/images/journalLogo/${this.state.publicationDetail.logo}`} 
                    alt={`The logo of ${this.state.publicationDetail.journal}`}/>
              </div>
              <p className="journal_name">{this.state.publicationDetail.journal}</p>
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
                   data-doi={this.state.publicationDetail.doi} 
                   className="altmetric-embed"></div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ssr(PublicationDetail)