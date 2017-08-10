import React from 'react'

import classNames from 'classnames'

import FaceImg from './FaceImg'
import FaceCard from './FaceCard'

import faceCardController from './faceCardController'

import './stylesheets/face.less'

class Face extends React.Component{
  constructor() {
    super()

    this.state          = {showDetail: false};
    this.loadDetailCard = this.loadDetailCard.bind(this);
  }

  loadDetailCard() {
    if(this.props.id) this.props.fetchApi();
  }

  render(){
    let imageSrc, imageAltText, cardElement, nameClassName;

    imageSrc      = `/assets/user/images/face/${this.props.src || 'default.svg'}`;
    nameClassName = classNames({hide: !this.props.showName});
    imageAltText  = this.props.name     ? `A portrait of ${this.props.name}` : 'A portrait';
    cardElement   = this.props.withCard ? 
                      <FaceCard loading={this.props.loading} error={this.props.error} data={this.props.data}/>
                      : null; 

    return (
      <div className="face_container" onMouseEnter={this.loadDetailCard}>
        <div className="face_main">
          <FaceImg {...this.props} src={imageSrc} alt={imageAltText} />
          <span className={nameClassName}>{this.props.name}</span>
        </div>
        {cardElement}
      </div>
    ) 
  }
}

export default faceCardController(Face)