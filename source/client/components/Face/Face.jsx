import React from 'react'

import classNames from 'classnames'

import FaceImg from './FaceImg'
import FaceCard from './FaceCard'

import faceCardController from './faceCardController'

import './stylesheets/face.less'

class Face extends React.Component{
  constructor(props) {
    super(props)

    this.imageSrc      = `/assets/user/images/face/${props.src || 'default.png'}`;
    this.nameClassName = classNames({hide: !props.showName});
    this.imageAltText  = props.name ? `A portrait of ${props.name}` : 'A portrait';

    this.parent         = null;
    this.card           = null;
    this.state          = {loadedData: false, cardX: 0, cardY: 0, showCard: false};
    this.enteredElement = false;
    this.loadDetailCard = this.loadDetailCard.bind(this);
    this.getParent      = this.getParent.bind(this);
    this.showCard       = this.showCard.bind(this);
    this.windowListener = this.windowListener.bind(this);
    this.resetPosition  = this.resetPosition.bind(this);
  }

  loadDetailCard(e) {
    if(!this.props.withCard) return false;
    if(window.width < 500) return false;

    if(!this.enteredElement){
      let bouding, cardX, cardY;
      bouding = this.parent.getBoundingClientRect();
      cardX = (bouding.left + this.card.clientWidth + 40 > window.innerWidth)
                ? window.innerWidth - this.card.clientWidth - 40
                : bouding.right - 50;
      cardY = (bouding.bottom + this.card.clientHeight + 20 > window.innerHeight) 
                ? window.innerHeight - this.card.clientHeight - 20 
                : bouding.bottom;

      this.setState({cardX: cardX, cardY: cardY});
      this.enteredElement = true;
    }

    if(this.props.id) this.props.fetchApi();
  }

  getParent(e) { 
    if (!e) return false;

    this.parent = e;
    this.card = e.querySelector('.face_card');
  }

  resetPosition() { 
    this.enteredElement = false
  }

  windowListener() {
    this.setState({showCard: false});
    window.removeEventListener('click', this.windowListener);
  }

  showCard() {
    if(window.innerWidth > 500) return false;

    if(!this.state.showCard)
      setTimeout(() => window.addEventListener('click', this.windowListener), 20);

    this.setState({showCard: true});
  }

  render(){
    let cardElement, cardPosition;
    
    cardPosition = {left: this.state.cardX, top: this.state.cardY};
    cardElement  = this.props.withCard
                     ? <FaceCard loading={this.props.loading} error={this.props.error} data={this.props.data} 
                                 style={cardPosition} show={this.state.showCard}/>
                     : null; 

    return (
      <div className="face_container" ref={this.getParent} onClick={this.showCard}
           onMouseEnter={this.loadDetailCard} onMouseLeave={this.resetPosition}>
        <div className="face_main">
          <FaceImg {...this.props} src={this.imageSrc} alt={this.imageAltText} />
          <span className={this.nameClassName}>{this.props.name}</span>
        </div>
        {cardElement}
      </div>
    ) 
  }
}

export default faceCardController(Face)