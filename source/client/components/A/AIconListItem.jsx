import React from 'react'

import { Route } from 'react-router'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import A from './A'

class AIconListItem extends React.Component{
  render() {
    return (
      <A to={this.props.to}>
        <ListItem button>
          <ListItemIcon>{this.props.icon}</ListItemIcon>
          <ListItemText primary={this.props.primary} />
        </ListItem>
      </A>
    )
  }
}

export default AIconListItem