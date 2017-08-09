import React from 'react'

import cubicBizer from 'cubic-bezier'

class StaticBackground extends React.Component{
  render(){
    return (
      <div className="header_background">
        <svg width="100%" height="100%" className="animated_background">
          <g>
            <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={this.props.src}/>
          </g>
        </svg>
      </div>
    )
  }
}

export default StaticBackground