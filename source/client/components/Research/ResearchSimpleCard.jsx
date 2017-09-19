import React from "react"

import Paper from 'material-ui/Paper'

import './Stylesheets/ResearchSimpleCard.less'

class ResearchSimpleCard extends React.Component{
  render() {
    let cardBackgroundStyle, paperClassName;
    
    cardBackgroundStyle = {
      backgroundImage: `url(/assets/user/images/paperCover/${this.props.researchCover})`
    }

    return (
      <Paper className={paperClassName}>
        <div className="content_container flexbox">
          <div className="research_simple_card_background" style={cardBackgroundStyle}>
          </div>
          <div className="title_container">
            <h3>{this.props.researchTitle}</h3>
          </div>
        </div>
      </Paper>
    )
  }
}

export default ResearchSimpleCard