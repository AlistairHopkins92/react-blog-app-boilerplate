'use strict';
import React from 'react';
import { Link } from 'react-router';
 
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
        <h3 className="header__logo">Chanse Campbell</h3>
        <span className="header__burger" onClick={this.toggleNav.bind(this)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
        <ul className={toggle}>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/blog'>blog</Link></li>
          <li><Link to='/projects'>projects</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
      </div>  
    );
  }
}

export default Header;
