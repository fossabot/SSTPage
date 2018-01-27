import React from 'react'

import { Helmet } from 'react-helmet'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Collapse from 'material-ui/transitions/Collapse'

import MailIcon from 'material-ui-icons/Mail'
import LocationIcon from 'material-ui-icons/LocationOn'
import DirectionIcon from 'material-ui-icons/QuestionAnswer'
import SchoolIcon from 'material-ui-icons/school'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

import MemberBasic from './MemberBasic'
import PublicationListItem from '../Publication/PublicationListItem'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/MemberDetail.less'

class MemberDetail extends React.Component{
  constructor() {
    super()

    this.state={
      email: 'loading...',
      openEducation: false
    };
  }

  componentDidMount() {
    this.setState({email: this.props.pageData.email});
  }

  handleEducations() {
    this.setState({ openEducation: !this.state.openEducation });
  }

  getEducationText(i, showBanchelor = true) {
    if(!showBanchelor) return `${i.school} · ${i.major}`
    return `${i.school} · ${i.major} · ${i.banchelor}`
  }

  constructEducation() {
    if(!this.props.pageData.education) return null

    const education = this.props.pageData.education;

    return (
      <div>
        <ListItem button onClick={this.handleEducations.bind(this)}>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={this.state.openEducation ? '教育经历' : this.getEducationText(education[education.length - 1], false)} />
          {this.state.openEducation ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openEducation} transitionDuration="auto" unmountOnExit className="nested">
          {
            education.map((i, n) => (
            <ListItem key={n}>
              <ListItemText primary={this.getEducationText(i)} />
            </ListItem>
            ))
          }
        </Collapse>
      </div>
    )
  }

  constructPublicationSection() {
    if(!this.props.pageData.publication || !this.props.pageData.publication.length) return null;
    return (
      <Paper>
        <section className="card_content">
          <h3 className="card_title">学术文章</h3>
          <List className="publication_list member_publication member_detail_content">
            { this.props.pageData.publication.map(item => (
              <PublicationListItem key={item.__fileName} id={item.__fileName} icon={item.icon} jornal={item.jornal}
                                   title={item.title} year={item.year} authors={item.authors} />
              )) }
          </List>
        </section>
      </Paper>
    )
  }

  sendEmail(){
    window.open(`mailto:${this.state.email}`);
  }

  render(){
    return (
      <div className="paper_wrap content_wrap member_detail">
        <Helmet>
          <title>{this.props.pageData.name} - {this.props.configuration.title.CHN}</title>
          <meta name="description" content={this.props.pageData.body.replace(/<[^>]+>/g,'').substring(0, 150)} />
          <meta property="og:title" content={this.props.pageData.name} />
          <meta property="og:type" content="profile" />
        </Helmet>
        <Grid container spacing={24}>
          <Grid item md={3} xs={12} className="side_grid">
            <Paper>
              <MemberBasic faceImage={this.props.pageData.image} name={this.props.pageData.name} title={this.props.pageData.title} />
              <List>
                <ListItem button onClick={this.sendEmail.bind(this)}>
                  <ListItemIcon><MailIcon /></ListItemIcon>
                  <ListItemText primary={this.state.email} />
                </ListItem>
                <ListItem button>
                  <ListItemIcon><LocationIcon /></ListItemIcon>
                  <ListItemText primary="北京市新街口外大街金丰和商务苑C座3楼" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item md={9} xs={12} className="main_grid">
            <Paper>
              <section>
                <List>
                  <ListItem>
                    <ListItemIcon><DirectionIcon /></ListItemIcon>
                    <ListItemText primary={this.props.pageData.researchDirection} />
                  </ListItem>
                  {this.constructEducation.bind(this)()}
                </List>
              </section>
            </Paper>

            <Paper>
              <section className="card_content">
                <h3 className="card_title">成员介绍</h3>
                <article className="member_introduction member_detail_content" dangerouslySetInnerHTML={{__html: this.props.pageData.body}}>
                </article>
              </section>
            </Paper>
            
            {this.constructPublicationSection()}
          </Grid>
        </Grid>
      </div>
    )
  }
}

MemberDetail.getLayout = () => ({
  title: "团队成员",
  background: require('./images/background.jpg'),
})

export default withConfiguration(ssr(MemberDetail))