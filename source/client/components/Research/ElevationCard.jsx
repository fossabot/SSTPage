import React from "react"

import Paper from 'material-ui/Paper'

class ResearchSimpleCard extends React.Component{
  constructor() {
    super()

    this.state = {elevation: 4, hover: false};
  }

  mouseEnter() {
    this.setState({elevation: 8, hover: true});
  }

  mouseLeave() {
    this.setState({elevation: 4, hover: false});
  }

  render() {
    return (
      <Paper className={this.props.className}  elevation={this.state.elevation}
             onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)}>
        {this.props.children}
      </Paper>
    )
  }
}

export default ResearchSimpleCard