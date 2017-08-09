import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import FaceList from '../Face/FaceList'

import './stylesheets/PaperCard.less'

class PaperCard extends React.Component{
  render(){
    let paperCardMediaBackgroundStyle;
    
    paperCardMediaBackgroundStyle = {
      backgroundImage: `url(/assets/user/images/paperCover/${this.props.paperCover})`
    }
    
    return (
      <Card>
        <CardMedia>
          <div className="paper_card_media" style={paperCardMediaBackgroundStyle}>
            <Typography type="headline" component="h3">
              {this.props.paperTitle}
            </Typography>
          </div>
        </CardMedia>
        <CardContent>
          <p className="paper_abstract">
            {this.props.children}
          </p>
        </CardContent>
        <CardActions>
          <FaceList listContent={this.listData}/>
        </CardActions>
      </Card>
    )
  }
}

export default PaperCard