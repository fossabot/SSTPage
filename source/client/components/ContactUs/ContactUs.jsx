import React from 'react'

import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Tabs, { Tab } from 'material-ui/Tabs'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import SwipeableViews from 'react-swipeable-views'
import { Map, Marker } from 'react-amap'

import Livere from './Livere.jsx'

import ssr from '../../modules/ssrComponent'

import './stylesheets/ContactUs.less'

import FaceIcon from 'material-ui-icons/Face'
import ChatIcon from 'material-ui-icons/Chat'
import DirectionsIcon from 'material-ui-icons/Directions'

class ContactUs extends React.Component{
  constructor() {
    super()
    this.state = {index: 0, mapElement: null};
  }

  componentDidMount() {
    let mapPosition;

    mapPosition = {longitude: 116.371627, latitude: 39.961554};
    this.props.switchBackground('联系我们', require('./images/background.jpg'));
    this.setState({
      mapElement: <Map amapkey="05e59a5e333b71938e69c73f86e36f1a" cursor="default" 
                    center={mapPosition} features={['road', 'point']}
                    zoom={18} scrollWheel={false}>
                    <Marker position={mapPosition} />
                  </Map>
    })
  }

  handleChange(event, index) {
    this.setState({ index: index });
  };

  handleChangeIndex(index) {
    this.setState({ index: index });
  };

  render(){
    return (
      <div className='contact_us content_wrap'>
        <Grid container spacing={24}>
          <Grid item md={9} xs={12}>
            <Paper> 
              <Tabs centered indicatorColor="primary" textColor="primary" 
                    index={this.state.index} onChange={this.handleChange.bind(this)}>
                <Tab icon={<FaceIcon />} label="概况" />
                <Tab icon={<DirectionsIcon />} label="地址" />
                <Tab icon={<ChatIcon />} label="留言" />
              </Tabs>

              <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex.bind(this)}>
                <article dangerouslySetInnerHTML={{__html: this.props.pageData.introduction}}>
                </article>
                <div>
                  <article className="bus_guide" dangerouslySetInnerHTML={{__html: this.props.pageData.address}}>
                  </article>
                  <div className="map">
                    {this.state.mapElement}
                  </div>
                </div>
                <Livere uid="MTAyMC8yOTkyMC82NDg1" />
              </SwipeableViews>
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
    )
  }
}

export default ssr(ContactUs, '/api/contact')