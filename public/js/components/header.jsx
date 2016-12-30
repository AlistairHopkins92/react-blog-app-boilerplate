'use strict';

import React from 'react';
 
class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
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