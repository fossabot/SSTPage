import React from 'react'

import { Helmet } from 'react-helmet'
import Grid from 'material-ui/Grid'

import Face from '../Face/Face'
import LineButton from '../LineButton/LineButton'
import SectionContainer from '../SectionContainer/SectionContainer'
import TutorIntroduction from '../Member/TutorIntroduction'
import PaperCard from './PaperCard'
import ResearchSimpleCard from '../Research/ResearchSimpleCard'

import withConfiguration from '../../modules/withConfiguration'
import ssr from '../../modules/ssrComponent'

import './stylesheets/IndexContent.less'

class IndexContent extends React.Component{
  render(){
    return (
      <div className="index_content">
        <Helmet>
          <meta name="description" content={this.props.configuration.groupIntroduction.replace(/<[^>]+>/g,'')} />
          <meta property="og:title" content={this.props.configuration.title.CHN} />
          <meta property="og:type" content="website" />
        </Helmet>
        <SectionContainer additionalClassName="tutor_introduction"  containerName="导师介绍"
                containerBackground={require('./images/tutorIntroductionBackground.jpg')}>
          <TutorIntroduction>
            <div dangerouslySetInnerHTML={{__html: this.props.pageData.tutorIntroduction}}></div>
          </TutorIntroduction>
          <LineButton buttonContent="所有成员" buttonLink="/member/" additionalClassName="dark"/>
        </SectionContainer>
        <SectionContainer additionalClassName="paper_introduction" containerName="学术论文"
                containerBackground={require('./images/publishBackground.jpg')}>
          <div className="content_wrap">
            <Grid container className="index_paper_card_container" spacing={24}>
              {this.props.pageData.publication.map(i => (
                <Grid item md={4} key={i.__fileName}>
                  <PaperCard id={i.__fileName} title={i.title} cover={i.cover} authors={i.authors}>{i.abstract}</PaperCard>
                </Grid>
              ))}
            </Grid>
          </div>
          <LineButton buttonContent="更多论文" buttonLink="/publication/" additionalClassName="dark"/>
          </SectionContainer>
          <SectionContainer additionalClassName="recent_research" containerName="近期研究"
                  containerBackground={require('./images/recentResearchBackground.jpg')}>
            <div className="content_wrap">
              <Grid className="rencent_research_card_container" container spacing={24}>
                {this.props.pageData.recentResearch.map((i, n) => (
                  <Grid item md={4} sm={12} key={n}>
                    <ResearchSimpleCard researchCover={i.cover} researchTitle={i.title}/>
                  </Grid>
                ))}
              </Grid>
            </div>
          <LineButton buttonContent="全部研究" buttonLink="/research/" additionalClassName="dark"/>
        </SectionContainer>
      </div>
    )
  }
}

export default withConfiguration(ssr(IndexContent))