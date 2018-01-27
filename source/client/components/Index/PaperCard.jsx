import React from 'react'
import { Link } from 'react-router-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import FaceList from '../Face/FaceList'

import './stylesheets/PaperCard.less'

class PaperCard extends React.Component{
  render(){
    return (
      <Card className="index_paper_card hover_card">
        <CardMedia
          className="card_media"
          image={`/assets/user/images/paperCover/${this.props.cover}`} 
        >
          <Typography type="headline" component="h3">
            <Link to={`/publication/${this.props.id}`}>{this.props.title}</Link>
          </Typography>
        </CardMedia>
        <CardContent>
          <p className="paper_abstract">
            {this.props.children}
          </p>
        </CardContent>
        <CardActions>
          <FaceList withCard fold listContent={this.props.authors} size="extra-small" />
        </CardActions>
      </Card>
    )
  }
}

export default PaperCard