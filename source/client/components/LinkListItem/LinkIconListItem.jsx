import React from 'react'

import { Route } from 'react-router'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

class IconListItem extends React.Component{
  constructor({history}) {
    super()

    this.history = history;
  }

  render() {
    return (
      <ListItem button onClick={() => this.history.push(this.props.to)}>
        <ListItemIcon>{this.props.icon}</ListItemIcon>
        <ListItemText primary={this.props.primary} />
      </ListItem>
    )
  }
}

class LinkIconListItem extends React.Component{
  render(){
    return (
      <Route path="/" render={props => <IconListItem {...props} {...this.props}/>} />
    )
  }
}

export default LinkIconListItem