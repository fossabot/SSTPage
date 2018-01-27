import React from 'react'

import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

import A from '../A/A'
import JournalIcon from './JournalIcon'
import FaceList from '../Face/FaceList'

import './stylesheets/PublicationListItem.less'

class PublicationListItem extends React.Component{
  render(){
    return (
      <A to={`/publication/${this.props.id}`}  >
        <ListItem button className="publication_list_item">
            <div className="title">
              <div className="publication_title">
                <Link to={`/publication/${this.props.id}`} onClick={e => e.preventDefault()}>
                  <span className="publication_name">{this.props.title}</span>
                  <span className="year">{this.props.year}</span>
                </Link>
              </div>
            </div>
            <div className="author">
              <FaceList withCard fold size="extra-small" 
                        onClick={e => e.stopPropagation()} listContent={this.props.authors} />
            </div>
            <div className="journal_information">
              <JournalIcon icon={this.props.icon} name={this.props.jornal} />
              <span className="name">{this.props.jornal}</span>
            </div>
        </ListItem>
      </A>
    )
  }
}

export default PublicationListItem