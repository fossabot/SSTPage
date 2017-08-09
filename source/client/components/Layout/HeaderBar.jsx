import React from 'react'

import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import { Menu as MenuIcon } from 'material-ui-icons'

import classNames from 'classnames'

import './stylesheets/HeaderBar.less'

class HeaderBar extends React.Component {
  constructor() {
    super()

    this.state = {
      expandNav: false,
    }
  }

  showNav() {
    this.setState({expandNav: true});
  }

  hideNav() {
    this.setState({expandNav: false});
  }

  render() {
    let navClassNames = classNames("top_nav", "flexbox", {
      expand: this.state.expandNav,
    })

    return (
      <header className="header_bar flexbox">
        <div className="logo">
          <Link to="/"><img src={require('./images/logo.svg')} alt="logo" /></Link>
        </div>
        <nav className={navClassNames} onClick={this.hideNav.bind(this)}>
          <Link to="/member/">团队成员</Link>
          <Link to="/">科研项目</Link>
          <Link to="/publication/">学术论文</Link>
          <Link to="/contact/">联系我们</Link>
        </nav>

        <IconButton color="contrast" className="menu_button" onClick={this.showNav.bind(this)}
                    aria-label="Show navigation list">
          <MenuIcon />
        </IconButton>
      </header>
    )
  }
}

export default HeaderBar