import React from 'react'
import { Route, Switch } from 'react-router'
import { Helmet } from 'react-helmet'

import classNames from 'classnames'

import HeaderBar from './HeaderBar'
import LineButton from '../LineButton/LineButton'
import SectionContainer from '../SectionContainer/SectionContainer'

import routerInfo from '../../../modules/routing'
import './stylesheets/Layout.less'

class Layout extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      pageTitle: null,
      backgroundElement: null,
    };

    this.switchBackground = this.switchBackground.bind(this);
  }

  switchBackground(title, backgroundElement) {
    if(backgroundElement && !React.isValidElement(backgroundElement)) 
      throw new TypeError('Background Element must be a valid element!');

      this.setState({pageTitle: title});
      setTimeout(() => this.setState({backgroundElement: backgroundElement}), 300);
  }

  render(){
    let date, year, browserData, headerSectionClasses;
    date = new Date();
    year = date.getFullYear();
    headerSectionClasses = classNames({
      'top_section': true,
      'root_page': !!this.props.match,
    });

    return (
      <div>
        <Helmet>
          <title>人际间语言交流的脑活动同步机制课题</title>
        </Helmet>
        <SectionContainer additionalClassName={headerSectionClasses}
                          containerBackground={require('./images/headerBackground.jpg')}>
          <div className="header_background_container">
            {this.state.backgroundElement}
          </div>
          <HeaderBar />
          <section className="introduction">
            <p className="main_text">
                我们主要采用磁共振、脑电以及近红外光学成像等多种神经科学研究手段考察人际交流的心理和脑机制，
                关注自然情境下人际间社会性互动的基本规律及其潜在的临床和教学应用价值。
            </p>
            <LineButton buttonContent="了解更多" buttonLink="/#" />
          </section>
          <h1 className="page_title">{this.state.pageTitle}</h1>
        </SectionContainer>
        <div className="page_content">
          <Switch>
            {routerInfo.map(i => (
              <Route key={i.__id} exact={i.exact === true} path={i.path} 
                     render={() => <i.component switchBackground={this.switchBackground} />} />
            ))}
          </Switch>
        </div>
        <footer className="bottom_section">
          <div className="logo">
            <img src={require('./images/footerLogo.png')} alt="logo of BNU and our lab." />
          </div>
          <div className="info">
            <p>版权所有 ©2016-{year} 北京师范大学脑与认知科学学院 · 人际间语言交流的脑活动同步机制课题组保留所有权利。</p>
            <p>Copyright ©2016-{year} Research Group of the Synchronization of Brain Activity on Interpersonal Communication All Right Reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout