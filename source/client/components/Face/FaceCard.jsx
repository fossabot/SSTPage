import React from 'react'

import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import EmailIcon from 'material-ui-icons/Email'
import LightbulbIcon from 'material-ui-icons/LightbulbOutline'
import HomeIcon from 'material-ui-icons/Home'
import LibraryBooksIcon from 'material-ui-icons/LibraryBooks'

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
  }
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

  render(){
    let loading, wrapClassNames;
    
    wrapClassNames = classNames('member_detail_wrap', {show: this.props.show});
    loading        = classNames({'loading': this.props.loading});
    
    return (
      <div className={wrapClassNames} style={this.props.style}>
        <Card className="member_detail">
          <div className={loading}>
            <div className="member_detail_main">
              <CardMedia>
                <img src={`/assets/user/images/face/${this.cardData.image}`} alt="A photo"
                    className="member_detail_face"/>
              </CardMedia>
              <div className="member_detail_infomation">
                <Typography type="headline" component="p" className="member_detail_name">
                  {this.cardData.name}
                </Typography>
                <List dense className="member_detail_list">
                  <ListItem button>
                    <ListItemIcon><LightbulbIcon /></ListItemIcon>
                    <ListItemText primary={this.cardData.researchDirection} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    <ListItemText primary={this.cardData.email} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={this.cardData.homepage} />
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="recent_paper">
              <Button color="primary">
                <LibraryBooksIcon /> 
                <span className="paper_title">
                  {this.cardData.latestPaper.name}
                </span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default FaceCard