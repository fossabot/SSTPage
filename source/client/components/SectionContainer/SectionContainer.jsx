import React from 'react'

import './stylesheets/SectionContainer.less'

class SectionContainer extends React.Component{
  getElementClassName() {
    let elementClassName;

    elementClassName = 'section_container';

    if (this.props.additionalClassName)
      elementClassName += ` ${this.props.additionalClassName}`

    return elementClassName
  }

  render(){
    let titleElement, containerBackground;

    titleElement = this.props.containerName ? <h2 className='section_container_title'>{this.props.containerName}</h2> : '';

    containerBackground = {
      backgroundImage: `url('${this.props.containerBackground}')`
    }

    return (
      <section className={this.getElementClassName()} style={containerBackground}>
        {titleElement}
        {this.props.children}
      </section>
    )
  }
}

export default SectionContainer