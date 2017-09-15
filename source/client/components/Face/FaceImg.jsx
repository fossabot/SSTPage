import React from "react"

import classnames from 'classnames'

import './stylesheets/FaceImg.less'

class Face extends React.Component{
  render(){
    let elementType, imgClassName, imgStyle;
    elementType  = this.props.size || 'large'; 
    imgClassName = classnames('face_img', elementType);
    imgStyle = {
      backgroundColor: '#f4f4f4',
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: 'cover',
    }

    return (
			<div className="face_img_container">
        <div className={imgClassName} style={imgStyle} title={this.props.peopleName} />
			</div>
    )
  }
}

export default Face