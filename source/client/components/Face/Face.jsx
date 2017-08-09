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
    let imageSrc, imageAltText, nameElement, cardElement;

    imageSrc      = `/assets/user/images/face/${this.props.src || 'default.svg'}`;
    imageAltText  = this.props.name     ? `A portrait of ${this.props.name}` : 'A portrait';
    nameElement   = this.props.showName ? <span>{this.props.name}</span>     : null;
    cardElement   = this.props.withCard ? 
                      <FaceCard loading={this.props.loading} error={this.props.error} data={this.props.data}/>
                      : null; 

    return (
      <div className="face_container" onMouseEnter={this.loadDetailCard}>
        <div className="face_main">
          <FaceImg {...this.props} src={imageSrc} alt={imageAltText} />
          {nameElement}
        </div>
        {cardElement}
      </div>
    ) 
  }
}

export default faceCardController(Face)