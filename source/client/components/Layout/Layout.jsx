import React from 'react'
import { Route, Switch } from 'react-router'
import { Helmet } from 'react-helmet'

import classNames from 'classnames'

import HeaderBar from './HeaderBar'
import LineButton from '../LineButton/LineButton'
import SectionContainer from '../SectionContainer/SectionContainer'

import AnimatedMaskBackground from  './AnimatedMaskBackground'
import StaticBackground from './StaticBackground'

import routerInfo from '../../../modules/routing'
import './stylesheets/Layout.less'

class Layout extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      pageTitle: null,
      background: null,
      backgroundQueue: [],
    };

    this.switchBackground = this.switchBackground.bind(this);
  }

  switchBackground(title = null, backgroundUrl = null) {
    this.setState({pageTitle: title});

    if(backgroundUrl) {
      setTimeout(() => {
        let nextState;
        nextState = this.state.backgroundQueue.slice();
        nextState.push(backgroundUrl);
        this.setState({backgroundQueue: nextState});
      }, 300);

      setTimeout(() => {
        let backgroundState;

        backgroundState = this.state.backgroundQueue.slice();
        backgroundState.pop();

        this.setState({
          backgroundQueue: backgroundState,
          background: backgroundUrl,
        })
      }, 1300);
    } else {
      this.setState({
        background: null
      });
    }
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
        <section className={headerSectionClasses}>
          <div className="header_background_container">
            <div className="index_background"></div>
            <StaticBackground src={this.state.background} />
            {this.state.backgroundQueue.map((i, n) => <AnimatedMaskBackground key={n} src={i} />)}
          </div>
          <HeaderBar />
          <section className="introduction">
            <p className="main_text">
                我们主要采用磁共振、脑电以及近红外光学成像等多种神经科学研究手段考察人际交流的心理和脑机制，
                关注自然情境下人际间社会性互动的基本规律及其潜在的临床和教学应用价值。
            </p>
            <LineButton buttonContent="了解更多" buttonLink="/article/introduction" />
          </section>
          <h1 className="page_title">{this.state.pageTitle}</h1>
        </section>
        <div className="page_content">
          <Switch>
            {routerInfo.map(i => (
              <Route key={i.__id} exact={i.exact === true} path={i.path} 
                     render={({ match }) => <i.component switchBackground={this.switchBackground} params={match.params}/>} />
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