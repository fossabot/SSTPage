import React from 'react'

import { Helmet } from 'react-helmet'
import Grid from 'material-ui/Grid'

import Face from '../Face/Face'
import LineButton from '../LineButton/LineButton'
import SectionContainer from '../SectionContainer/SectionContainer'
import PaperCard from './PaperCard'
import ResearchSimpleCard from './ResearchSimpleCard'

import routerInfo from '../../../modules/routing'
import ssr from '../../modules/ssrComponent'

import './stylesheets/IndexContent.less'

class IndexContent extends React.Component{
  constructor(props){
  super(props)

  this.researches = [
      {
        id: 1,
        cover: 'sample1.jpg',
        name: '教育情景下师生的脑活动同步',
      },
      {
        id: 2,
        cover: 'sample2.jpg',
        name: '领导力形成的脑机制',
      },
      {
        id: 3,
        cover: 'sample3.jpeg',
        name: 'Emoji对情绪文本理解影响',
      },
      {
        id: 4,
        cover: 'sample4.jpeg',
        name: '情侣对话的脑活动特点',
      }
    ]
  }

  componentDidMount() {
    this.props.switchBackground();
  }

  render(){
  return (
    <div className="index_content">
      <Helmet>
        <title>人际间语言交流的脑活动同步机制课题</title>
      </Helmet>
      <SectionContainer additionalClassName="tutor_introduction"  containerName="导师介绍"
              containerBackground={require('./images/tutorIntroductionBackground.jpg')}>
        <div className="tutor_introduction_content flexbox">
          <Face src="LCM.jpg" size="large" />
          <div className="main_text flexbox">
          <div dangerouslySetInnerHTML={{__html: this.props.pageData.tutorIntroduction}}></div>        
          </div>
        </div>
        <LineButton buttonContent="所有成员" buttonLink="/member/" additionalClassName="dark"/>
      </SectionContainer>
      <SectionContainer additionalClassName="paper_introduction" containerName="学术论文"
              containerBackground={require('./images/publishBackground.jpg')}>
        <div className="content_wrap">
          <Grid container spacing={24}>
            {
            this.props.pageData.publication.map(i => (
              <Grid item md={4} key={i.__fileName}>
                <PaperCard title={i.title} cover={i.cover} authors={i.authors}>{i.abstract}</PaperCard>
              </Grid>
            ))
            }
          </Grid>
        </div>
        <LineButton buttonContent="更多论文" buttonLink="/publication/" additionalClassName="dark"/>
        </SectionContainer>
        <SectionContainer additionalClassName="recent_research" containerName="近期研究"
                containerBackground={require('./images/recentResearchBackground.jpg')}>
          <div className="content_wrap">
            <Grid container spacing={24}>
              {
              this.researches.map(i => (
                <Grid item md={3} sm={6} xs={12} key={i.id}>
                <ResearchSimpleCard researchCover={i.cover} researchTitle={i.name}/>
                </Grid>
              ))
              }
            </Grid>
          </div>
        <LineButton buttonContent="全部研究" buttonLink="/#" additionalClassName="dark"/>
      </SectionContainer>
    </div>
  )}
}

export default ssr(IndexContent, '/api/index')