import React from 'react'

import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import MenuIcon from 'material-ui-icons/Menu'
import HomeIcon from 'material-ui-icons/Home'
import MemberIcon from 'material-ui-icons/People'
import ResearchIcon from 'material-ui-icons/FindInPage'
import PublicationIcon from 'material-ui-icons/LibraryBooks'
import ContactIcon from 'material-ui-icons/Phone'

import LinkIconListItem from '../LinkListItem/LinkIconListItem'

import classNames from 'classnames'

import './stylesheets/HeaderBar.less'

const navLinks = [
  {
    name: '团队成员',
    link: '/member/',
    icon: <MemberIcon />,
  }, {
    name: '科研项目',
    link: '/research/',
    icon: <ResearchIcon />,
  }, {
    name: '学术论文',
    link: '/publication/',
    icon: <PublicationIcon />,
  }, {
    name: '联系我们',
    link: '/contact/',
    icon: <ContactIcon />,
  }
]

const $logo = (
  <div className="logo">
    <Link to="/"><img src={require('./images/logo.svg')} alt="logo" /></Link>
  </div>
)

class HeaderBar extends React.Component {
  constructor() {
    super()

    this.state = {
      openDrawer: false,
      scrolledDown: false,
      hideAppBar: false,
    }

    this.hideNav = this.hideNav.bind(this);
    this.showNav = this.showNav.bind(this);
    this.refreshAppBar = this.refreshAppBar.bind(this);
    this.previousY = window.scrollY;
  }

  showNav() {
    this.setState({openDrawer: true});
  }

  hideNav() {
    this.setState({openDrawer: false});
  }

  refreshAppBar() {
    let scrollPath;
    
    scrollPath = window.scrollY - this.previousY;
    this.previousY = window.scrollY;

    if(window.scrollY > 90) {
      if(!this.state.scrolledDown) this.setState({scrolledDown: true});
    } else {
      if(this.state.scrolledDown) this.setState({scrolledDown: false});
    }

    if(window.scrollY > 500) {
      if(scrollPath > 0) {
        if(!this.state.hideAppBar) this.setState({hideAppBar: true});
      } else {
        if(this.state.hideAppBar) this.setState({hideAppBar: false});
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.refreshAppBar);
  }

  componentWillReceiveProps() {
    this.refreshAppBar();
  }

  render() {
    let appBarClassName;

    appBarClassName = classNames('app_bar', {
      'scrolled': this.state.scrolledDown,
      'hide': this.state.hideAppBar,
    });

    return (
      <div>
        <AppBar position="fixed" className={appBarClassName}>
          {$logo}
          <Toolbar className="tool_bar">
            <IconButton color="contrast" onClick={this.showNav} aria-label="Show navigation list">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.openDrawer} onRequestClose={this.hideNav} onClick={this.hideNav}>
          <img src={require('./images/sidebarImg.svg')} alt="A decorating image" className="sidebar_img"/>
          <List disablePadding className="drawer_list">
            <LinkIconListItem to='/' icon={<HomeIcon />} primary="首页" />
            {navLinks.map(i => (
              <LinkIconListItem key={i.link} to={i.link} icon={i.icon} primary={i.name} />
            ))}
          </List>
          <p className="sidebar_copyright">
            ©2016-{new Date().getFullYear()} 人际间语言交流的脑活动同步机制课题组
          </p>
        </Drawer>
        <header className="header_bar flexbox">
          {$logo}
          <nav className="top_nav flexbox" onClick={this.hideNav}>
            {navLinks.map(i => <Link key={i.link} to={i.link}>{i.name}</Link>)}
          </nav>
        </header>
      </div>
    )
  }
}

export default HeaderBar