'use strict';
import React from 'react';
 
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  componentWillUnmount() {
     this.setState({
      open: false
    });
  }

  toggleNav() {
    this.setState({
      open: !this.state.open
    });
  }
  
  render() {
    const toggle = ['header__links', this.state.open].join(' ');
    return (
      <div className="header">
        <span className="header__logo">Site Name</span>
        <span className="header__burger" onClick={this.toggleNav.bind(this)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
        <ul className={toggle}>
          <li><a href="/">home</a></li>
          <li><a href="/blog">blog</a></li>
          <li><a href="/projects">projects</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
      </div>  
    );
  }
}

export default Header;
