import React from 'react'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

import ProjectItem from './ProjectItem'
import ResearchSimpleCard from './ResearchSimpleCard'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/Research.less'

class Research extends React.Component{
  constructor() {
    super();

    this.description = '此页面列出了我们团队过往参与过的全部科研项目和目前正在探讨的学术问题。';
  }

  render(){
    return (
      <Paper className="paper_wrap content_wrap research">
        <Helmet>
          <title>科研项目 - {this.props.configuration.title.CHN}</title>
          <meta name="description" content={this.description} />
          <meta property="og:description" content={this.description} />
          <meta property="og:title" content="科研项目" />
          <meta property="og:type" content="website" />
        </Helmet>
        <section>
          <h2 className="paper_title">主持项目</h2>
          <Grid container className="project_list" spacing={24}>
            {this.props.pageData.project.h.map((i, n) => (
              <Grid item lg={4} md={6} xs={12} key={n} className="project_item_wrap">
                <ProjectItem title={i.title} topic={i.topic} fund={i.fund}
                             timeStart={i.timeStart} timeEnd={i.timeEnd} />
              </Grid>
            ))}
          </Grid>
        </section>
        <section>
          <h2 className="paper_title">参与项目</h2>
          <Grid container className="project_list" spacing={24}>
            {this.props.pageData.project.p.map((i, n) => (
              <Grid item lg={4} md={6} xs={12} key={n} className="project_item_wrap">
                <ProjectItem title={i.title} topic={i.topic} fund={i.fund}
                timeStart={i.timeStart} timeEnd={i.timeEnd} />
              </Grid>
            ))}
          </Grid>
        </section>
        <section>
          <h2 className="paper_title">近期研究</h2>
          <Grid container className="project_list" spacing={24}>
          { this.props.pageData.recentResearch.map((i, n) => (
                <Grid item md={4} xs={12} key={n}>
                  <ResearchSimpleCard researchCover={i.cover} researchTitle={i.title}/>
                </Grid>
            ))}
          </Grid>
        </section>
      </Paper>
    )
  }
}

Research.getLayout = () => ({
  title: "科研项目",
  background: require('./images/background.jpg'),
})

export default withConfiguration(ssr(Research))