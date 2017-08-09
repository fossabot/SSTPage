import React from 'react'
import { Helmet } from 'react-helmet'

import Face from '../Face/Face'
import LineButton from '../LineButton/LineButton'
import SectionContainer from '../SectionContainer/SectionContainer'

import PaperCard from './PaperCard'
import ResearchSimpleCard from './ResearchSimpleCard'

import Grid from 'material-ui/Grid'

import routerInfo from '../../../modules/routing'
import ssr from '../../modules/ssrComponent'

import './stylesheets/IndexContent.less'

class IndexContent extends React.Component{
  constructor(props){
  super(props)

  this.papers = [
    {
      id: 1,
      title: '领导力形成的脑机制',
      author: ['LCM', 'LYH', 'ZLF', 'SG', 'LL', 'DGS', 'PH'],
      cover: 'jj-1.jpg',
      introduction: 'Speech production difficulties are apparent in people who stutter (PWS). PWS also have difficulties in speech perception compared to controls. It is unclear whether the speech perception difficulties in PWS are independent of, or related to, their speech production difficulties ...'
    },
    {
      id: 2,
      title: '利用fNIRS技术对听—说过程中脑活动耦合的测量方法',
      author: ['LCM', 'LYH', 'ZLF', 'SG', 'LL', 'DGS', 'PH'],
      cover: 'bxl-1.jpg',
      introduction: 'Speech production difficulties are apparent in people who stutter (PWS). PWS also have difficulties in speech perception compared to controls. It is unclear whether the speech perception difficulties in PWS are independent of, or related to, their speech production difficulties ...'
    },
    {
      id: 3,
      title: '利用开源工具完成认知神经科学中大容量数据计算的方法',
      author: ['LCM', 'LYH', 'ZLF', 'SG', 'LL', 'DGS', 'PH'],
      cover: 'zh-1.jpg',
      introduction: 'Speech production difficulties are apparent in people who stutter (PWS). PWS also have difficulties in speech perception compared to controls. It is unclear whether the speech perception difficulties in PWS are independent of, or related to, their speech production difficulties ...'
    }
  ];

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
        <title>首页</title>
      </Helmet>
      <SectionContainer additionalClassName="tutor_introduction"  containerName="导师介绍"
              containerBackground={require('./images/tutorIntroductionBackground.jpg')}>
        <div className="tutor_introduction_content flexbox">
          <Face faceImage="LCM.png" faceSize="large" />
          <div className="main_text flexbox">
          <div>
            <p>
              卢春明，理学博士，2008年毕业于北京师范大学认知神经科学与学习国家重点实验室，获理学博士学位，
              同年留校工作。2014-2015年在美国麻省理工学院麦戈文脑研究院访学。目前为北京师范大学认知神经科
              学与学习国家重点实验室副教授，博士生导师，语言交流及其障碍研究团队PI。
            </p>
            <p>
              目前在PNAS、Journal of Neuroscience、Neurology、Biological Psychiatry: CNNI等期刊上论文
              20余篇。担任国际近红外光学成像协会的通讯委员会理事等。
            </p>
          </div>        
          </div>
        </div>
        <LineButton buttonContent="所有成员" buttonLink="/#" additionalClassName="dark"/>
      </SectionContainer>
      <SectionContainer additionalClassName="paper_introduction" containerName="学术论文"
              containerBackground={require('./images/publishBackground.jpg')}>
        <Grid container gutter={24}>
          {
          this.papers.map(i => (
            <Grid item md={4} key={i.id}>
            <PaperCard paperTitle={i.title} paperCover={i.cover}>{i.introduction}</PaperCard>
            </Grid>
          ))
          }
        </Grid>
        <LineButton buttonContent="更多论文" buttonLink="/#" additionalClassName="dark"/>
        </SectionContainer>
        <SectionContainer additionalClassName="recent_research" containerName="近期研究"
                containerBackground={require('./images/recentResearchBackground.jpg')}>
        <Grid container gutter={24}>
          {
          this.researches.map(i => (
            <Grid item md={3} key={i.id}>
            <ResearchSimpleCard researchCover={i.cover} researchTitle={i.name}/>
            </Grid>
          ))
          }
        </Grid>
        <LineButton buttonContent="全部研究" buttonLink="/#" additionalClassName="dark"/>
      </SectionContainer>
    </div>
  )}
}

export default ssr(IndexContent)