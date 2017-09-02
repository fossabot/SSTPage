import React from 'react'

import cubicBizer from 'cubic-bezier'

class AnimatedMaskBackground extends React.Component{
  componentDidMount() {
    /*
      Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.
      Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.
      Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.Fuck Edge.
    */

    let $animatedBackground, $maskCircle, upAnimationConfig, scaleAnimationConfig;

    $maskCircle = document.querySelector('#mask-circle');

    upAnimationConfig = {
      element: $maskCircle,
      attribution: 'cy',
      attributionStart: 110,
      attributionMax: -50,
      animationFunction: [0.72, 0.04, 0, 1.78],
      duration: 400,
      then: () => this.startAnimation(scaleAnimationConfig),
    }

    scaleAnimationConfig = {
      element: $maskCircle,
      attribution: 'r',
      attributionStart: 1,
      attributionMax: 150,
      animationFunction: [0.895, 0.03, 0.685, 0.22],
      duration: 400,
    }

    this.startAnimation(upAnimationConfig);
  }

  startAnimation({element,
                  attribution, attributionStart, attributionMax,
                  animationFunction, duration, frameRate = 20, 
                  then}) {
    let startTime, animationId, currentAttribution, $element;

    const animationCurve = cubicBizer(animationFunction[0], animationFunction[1],
                                      animationFunction[2], animationFunction[3],  1);

    const renderFrame = function (time) {
      if (startTime === undefined) startTime = time;

      const frame = Math.floor((time - startTime) / duration * 100) / 100;

      currentAttribution = attributionStart + attributionMax * animationCurve(frame);
      element.setAttribute(attribution, `${currentAttribution}%`);

      if (frame < 1) requestAnimationFrame(renderFrame);
      else if (then) then();
    }

    requestAnimationFrame(renderFrame);
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