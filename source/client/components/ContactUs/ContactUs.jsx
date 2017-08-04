import React from 'react'

import { Helmet } from 'react-helmet'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Tabs, { Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import { Map, Marker } from 'react-amap'

import AnimatedMaskBackground from '../AnimatedMaskBackground/AnimatedMaskBackground'

import './stylesheets/ContactUs.less'

import { 
  Face as FaceIcon, 
  Chat as ChatIcon, 
  Directions as DirectionsIcon 
} from 'material-ui-icons'

class ContactUs extends React.Component{
  constructor() {
    super()
    this.state = {index: 0, mapElement: null};
  }

  componentDidMount() {
    let mapPosition;

    mapPosition = {longitude: 116.371627, latitude: 39.961554};
    this.props.switchBackground('联系我们', <AnimatedMaskBackground src={require('./images/background.jpg')} />);
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
        <Helmet>
          <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=05e59a5e333b71938e69c73f86e36f1a"></script>
          <script type="text/javascript">{`
            (function(d, s) {
              let j, e = d.getElementsByTagName(s)[0];

              if (typeof LivereTower === 'function') { return }

              j = d.createElement(s);
              j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
              j.async = true;

              e.parentNode.insertBefore(j, e);
            })(document, 'script')
          `}</script>
        </Helmet>
        <Grid container gutter={24}>
          <Grid item md={9} xs={12}>
            <Paper> 
              <Tabs centered indicatorColor="accent" textColor="accent"
                    index={this.state.index} onChange={this.handleChange.bind(this)}>
                <Tab icon={<FaceIcon />} label="概况" />
                <Tab icon={<DirectionsIcon />} label="地址" />
                <Tab icon={<ChatIcon />} label="留言" />
              </Tabs>

              <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex.bind(this)}>
                <div>A</div>
                <div>
                  地图
                  <div className="map">
                    {this.state.mapElement}
                  </div>
                </div>
                <div>
                  <div id="lv-container" data-id="city" data-uid="MTAyMC8yOTkyMC82NDg1"></div>
                </div>
              </SwipeableViews>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Paper>
              !!!
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default ContactUs