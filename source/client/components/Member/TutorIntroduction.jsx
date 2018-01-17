import React from 'react'

import Face from '../Face/Face'

class TutorIntroduction extends React.Component{
  render(){
    return (
      <div className="tutor_introduction_content flexbox">
        <Face src="LCM.jpg" size="large" />
        <div className="main_text flexbox">
          {this.props.children}        
        </div>
      </div>
    )
  }
}

export default TutorIntroduction