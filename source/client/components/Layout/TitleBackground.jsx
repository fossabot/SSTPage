import React from 'react'

import StaticBackground from './StaticBackground'
import AnimatedMaskBackground from './AnimatedMaskBackground'

class TitleBackground extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      background: props.background,
      backgroundQueue: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.background === this.props.background) return true;

    if(nextProps.background) {
      setTimeout(() => {
        let nextState;
        nextState = this.state.backgroundQueue.slice();
        nextState.push(nextProps.background);
        this.setState({backgroundQueue: nextState});
      }, 300);

      setTimeout(() => {
        let backgroundState;

        backgroundState = this.state.backgroundQueue.slice();
        backgroundState.pop();

        this.setState({
          backgroundQueue: backgroundState,
          background: nextProps.background,
        })
      }, 1300);
    } else {
      this.setState({
        background: null
      });
    }
  }

  render(){
    return (
      <div className="header_background_container">
        <div className="index_background"></div>
        <StaticBackground src={this.state.background} />
        {this.state.backgroundQueue.map((i, n) => <AnimatedMaskBackground key={n} src={i} />)}
      </div>
    )
  }
}

export default TitleBackground