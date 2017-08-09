import React from 'react'

import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
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
    this.state = {show: false};
    this.needFix = false;
    this.fixPosition = this.fixPosition.bind(this);
  }

  fixPosition(element) {
    if(element){
      this.needFix = (document.body.getBoundingClientRect().right - element.getBoundingClientRect().right < 420);
      this.setState({show: true});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.data)
      this.cardData = nextProps.data;
  }

  render(){
    let loading, cardClassNames;
    
    loading        = classNames({'loading': this.props.loading});
    cardClassNames = classNames('member_detail', {
      'fix-position': this.needFix,
      'hide'        : !this.state.show,
    });
    
    return (
      <div className="member_detail_wrap" ref={this.fixPosition}>
        <Card className={cardClassNames}>
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
                    <ListItemIcon>
                      <img src='/assets/user/images/icons/lightbulb.svg' />
                    </ListItemIcon>
                    <ListItemText primary={this.cardData.researchDirection} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <img src='/assets/user/images/icons/email.svg' />
                    </ListItemIcon>
                    <ListItemText primary={this.cardData.email} />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <img src='/assets/user/images/icons/home.svg' />
                    </ListItemIcon>
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