import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Tabs, { Tab } from 'material-ui/Tabs'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { Map, Marker } from 'react-amap'

import Comment from './Comment.jsx'

import ssr from '../../modules/ssrComponent'
import withConfiguration from '../../modules/withConfiguration'

import ContactUsErrorBoundary from './ContactUsErrorBoundary'

import './stylesheets/ContactUs.less'

import FaceIcon from 'material-ui-icons/Face'
import ChatIcon from 'material-ui-icons/Chat'
import DirectionsIcon from 'material-ui-icons/Directions'

class ContactUs extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {index: 0, mapElement: null};
    this.description = props.pageData.introduction.match(/<p>([\s\S]*?)<\/p>/)[1];
  }

  handleChange(event, index) {
    this.setState({ index: index });
  };

  render(){
    const mapPosition = {longitude: 116.371627, latitude: 39.961554};

    return (
      <ContactUsErrorBoundary>
        <div className='contact_us paper_wrap content_wrap'>
          <Helmet>
            <title>联系我们 - {this.props.configuration.title.CHN}</title>
            <meta name="description" content={this.description} />
            <meta property="og:description" content={this.description} />
            <meta property="og:title" content="联系我们" />
            <meta property="og:type" content="article" />
          </Helmet>
          <Grid container spacing={24}>
            <Grid item md={9} xs={12}>
              <Paper> 
                <Tabs centered indicatorColor="primary" textColor="primary"
                      value={this.state.index} onChange={this.handleChange.bind(this)}>
                  <Tab icon={<FaceIcon />} label="概况" />
                  <Tab icon={<DirectionsIcon />} label="地址" />
                  <Tab icon={<ChatIcon />} label="留言" />
                </Tabs>

                  {
                    this.state.index === 0 && 
                      <article className="common_article" dangerouslySetInnerHTML={{__html: this.props.pageData.introduction}}></article>
                  }

                  {
                    this.state.index === 1 &&
                      <div>
                      <article className="bus_guide" dangerouslySetInnerHTML={{__html: this.props.pageData.address}}>
                      </article>
                      <div className="map">
                        <Map amapkey="05e59a5e333b71938e69c73f86e36f1a" cursor="default" 
                          center={mapPosition} features={['road', 'point']}
                          zoom={18} scrollWheel={false}>
                          <Marker position={mapPosition} />
                        </Map>
                      </div>
                    </div>
                  }

                  {
                    this.state.index === 2 && 
                      <Comment uid="MTAyMC8yOTkyMC82NDg1" />
                  }
              </Paper>
            </Grid>
            <Grid item md={3} xs={12}>
              <Paper className="contact_sidebar">
                <h3>联系人</h3>
                <List>
                  {Object.keys(this.props.pageData.sidebar).map( i => (
                    <ListItem button key={i}>
                      <ListItemIcon>
                        <img src={`/assets/user/images/icons/${i}.svg`} alt={`An icon of ${i}`}/>
                      </ListItemIcon> 
                      <ListItemText primary={this.props.pageData.sidebar[i]} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </ContactUsErrorBoundary>
    )
  }
}

ContactUs.getLayout = () => ({
  title: "联系我们",
  background: require('./images/background.jpg'),
})

export default withConfiguration(ssr(ContactUs))