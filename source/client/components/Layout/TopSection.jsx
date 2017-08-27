import React from 'react'

import HeaderBar from './HeaderBar'
import TitleBackground from './TitleBackground'
import LineButton from '../LineButton/LineButton'
import SectionContainer from '../SectionContainer/SectionContainer'

import classNames from 'classnames'

import withConfiguration from '../../modules/withConfiguration'

import './stylesheets/TopSection.less'

class TopSection extends React.Component{
  render(){
    let headerSectionClasses;

    headerSectionClasses = classNames({
      'top_section': true,
      'root_page': !!this.props.match,
    });
    
    return (
      <section className={headerSectionClasses}>
        <TitleBackground background={this.props.background} />
        <h1 className="page_title">{this.props.title}</h1>
        <HeaderBar />
        <section className="introduction">
          <div className="main_text" 
              dangerouslySetInnerHTML={{__html: this.props.configuration.groupIntroduction}}>
          </div>
          <LineButton buttonContent="了解更多" buttonLink="/article/introduction" />
        </section>
      </section>
    )
  }
}

export default withConfiguration(TopSection)