import React from 'react'

import cubicBizer from 'cubic-bezier'

class AnimatedMaskBackground extends React.Component{
  componentDidMount() {
    /*
      Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.
      Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.
      Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.
    */

    let $animatedBackground, $maskCircle,
        upAnimationFunction, scaleAnimationFunction,
        upAnimationConfig, scaleAnimationConfig;

    $maskCircle = document.querySelector('#mask-circle');
    upAnimationFunction = cubicBizer(0.72, 0.04, 0, 1.78, 10);
    scaleAnimationFunction = cubicBizer(0.895, 0.03, 0.685, 0.22, 10);

    scaleAnimationConfig = {
      element: $maskCircle,
      attribution: 'r',
      attributionStart: 1,
      attributionMax: 150,
      animationFunction: scaleAnimationFunction,
      frameStep: 0.04,
    }

    upAnimationConfig = {
      element: $maskCircle,
      attribution: 'cy',
      attributionStart: 110,
      attributionMax: -50,
      animationFunction: upAnimationFunction,
      frameStep: 0.06,
      then: () => this.startAnimation(scaleAnimationConfig),
    }

    setTimeout(this.startAnimation(upAnimationConfig), 3000);
  }

  startAnimation({element,
                  attribution, attributionStart, attributionMax,
                  animationFunction, frameStep, frameRate = 20, 
                  then}) {
    let frame, animationInterval, currentAttribution, $element;

    frame = 0;

    animationInterval = setInterval(() => {
      currentAttribution = attributionStart + attributionMax * animationFunction(frame);
      element.setAttribute(attribution, `${currentAttribution}%`);
      if(frame >= 1) {
        clearInterval(animationInterval);
        if(then) then();
      }
      frame += frameStep;
    }, frameRate);
  }
  
  render(){
    return (
      <div className="header_background">
        <svg width="100%" height="100%" className="animated_background">
          <defs>
            <clipPath id="animated-mask">
              <circle id="mask-circle" cx="50%" cy="110%" r="1%"/>
            </clipPath>
          </defs>
          <g clipPath="url(#animated-mask)">
            <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={this.props.src}/>
          </g>
        </svg>
      </div>
    )
  }
}

export default AnimatedMaskBackground