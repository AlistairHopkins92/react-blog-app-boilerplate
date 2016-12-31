'use strict';

import React from 'react';
 
class Header extends React.Component {
  constructor(props){
    super(props);

  }

  toggleNav() {

  }
  
  render() {
    return (
      <div className="header">
        <span className="header__logo">Site Name</span>
        <span className="header__burger">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </span>
        <ul className="header__links">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/Projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>  
    );
  }
}

export default Header;

// <header id="header">
//     <div class="col-sm-4">
//         <span class="nav__title">Chanse Campbell</span>
//     </div>
//     <div class="nav__links col-sm-8">
//         <a href="/" class="nav__link">Blog</a>
//         <a href="/games" class="nav__link">Games</a>
//         <a href="/contact" class="nav__link">Contact</a>
//     </div>
//     <div class="nav__burger-menu">
//         <i class="fa fa-bars" aria-hidden="true"></i>
//     </div>
// </header>
// <div class="nav__dropdown">
//     <ul>
//         <li><a href="/" class="nav__link">Blog</a></li>
//         <li><a href="/games" class="nav__link">Games</a></li>
//         <li><a href="/contact" class="nav__link">Contact</a></li>
//     </ul>
// </div>
