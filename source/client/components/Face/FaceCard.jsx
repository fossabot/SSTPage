import React from 'react'

import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import EmailIcon from 'material-ui-icons/Email'
import LightbulbIcon from 'material-ui-icons/LightbulbOutline'
import HomeIcon from 'material-ui-icons/Home'
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks'

import A from '../A/A'

import classNames from 'classnames'

import './stylesheets/FaceCard.less'

const placeHolders = {
  name: '██████',
  cardItem: '█████████████████████',
  research: '████████████████████████████████████',
}

const loadingData = {
  name: placeHolders.name,
  image: 'default.svg',
  researchDirection: placeHolders.cardItem,
  email: placeHolders.cardItem,
  homepage: placeHolders.cardItem,
  latestPaper: {
    exists: true,
    id: null,
    name: placeHolders.research,
  },
  loading: true
}

class FaceCard extends React.Component{
  constructor() {
    super()

    this.cardData = loadingData;
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.data)
      this.cardData = nextProps.data;
  }

  sendEmail(){
    if(this.cardData.loading) return false;
    window.open(`mailto:${this.cardData.email}`);
  }

  openHomepage(){
    if(this.cardData.loading) return false;
    window.open(this.cardData.homepage);
  }

  render(){
    let loading, wrapClassNames;
    
    wrapClassNames = classNames('face_card_wrap', {show: this.props.show});
    loading        = classNames({'loading': this.props.loading});
    
    return (
      <div className={wrapClassNames} style={this.props.style} onClick={e => e.stopPropagation()}>
        <Card className="face_card">
          <div className={loading}>
            <div className="face_card_main">
              <div className="face_card_face_container">
                <img src={`/assets/user/images/face/${this.cardData.image}`} alt="A photo"
                    className="face_card_face"/>
              </div>
              <div className="face_card_infomation">
                <Typography type="headline" component="p" className="face_card_name">
                  {this.cardData.name}
                </Typography>
                <List dense className="face_card_list">
                  <ListItem button>
                    <ListItemIcon><LightbulbIcon /></ListItemIcon>
                    <ListItemText primary={this.cardData.researchDirection} />
                  </ListItem>
                  <ListItem button onClick={this.sendEmail.bind(this)}>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    <ListItemText primary={this.cardData.email} />
                  </ListItem>
                  <ListItem button onClick={this.openHomepage.bind(this)}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={this.cardData.homepage} />
                  </ListItem>
                </List>
              </div>
            </div>
            <A to={`/publication/${this.cardData.latestPaper.id}`}>
              <div className="recent_paper">
                  <Button color="primary">
                    <LibraryBooksIcon /> 
                    <span className="paper_title">
                      {this.cardData.latestPaper.name}
                    </span>
                  </Button>
              </div>
            </A>
          </div>
        </Card>
      </div>
    )
  }
}

export default FaceCard