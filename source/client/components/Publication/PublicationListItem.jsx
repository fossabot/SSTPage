import React from 'react'

import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

import JournalIcon from './JournalIcon'
import FaceList from '../Face/FaceList'

import './stylesheets/PublicationListItem.less'

class PublicationListItem extends React.Component{
  render(){
    return (
      <ListItem button className="publication_list_item">
        <div className="title">
          <div className="logo">
            <JournalIcon icon={this.props.icon} name={this.props.jornal} />
          </div>
          <div className="publication_title">
            <Link to={`/publication/${this.props.id}`}>
              <span className="publication_name">{this.props.title}</span>
              <span className="year">{this.props.year}</span>
            </Link>
          </div>
        </div>
        <div className="journal_information">
          <JournalIcon icon={this.props.icon} name={this.props.jornal} />
          <span className="name">{this.props.jornal}</span>
        </div>
        <div className="author">
          <FaceList withCard fold listContent={this.props.authors} size="extra-small"/>
        </div>
      </ListItem>
    )
  }
}

export default PublicationListItem