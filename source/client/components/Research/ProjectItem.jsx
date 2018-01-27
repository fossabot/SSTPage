import React from 'react'

import Grid from 'material-ui/Grid'

import ElevationCard from './ElevationCard'

import './stylesheets/ProjectItem.less'

class Project extends React.Component{
  render(){
    return (
      <div className="project_item hover_card">
        <div className="project_main">
          <p className="title">{this.props.title}</p>
          <div className="topic_container">
            <p className="topic">
              {this.props.topic || '科研项目'}
            </p>
            <p className="time">{this.props.timeStart}~{this.props.timeEnd}</p>
          </div>
        </div>
        {this.props.fund && <p className="fund">{this.props.fund}万元</p>}
      </div>
    )
  }
}

export default Project