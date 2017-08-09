import React from "react"

import classnames from 'classnames'

import './stylesheets/FaceImg.less'

class Face extends React.Component{
  render(){
    let elementType, imgClassName;
    elementType  = this.props.size || 'large'; 
    imgClassName = classnames('face_img', elementType);

    return (
			<div className="face_img_container">
				<img className={imgClassName} src={this.props.src} alt={this.props.alt} title={this.props.peopleName}/>
			</div>
    )
  }
}

export default Face