'use strict';

import React from 'react';
import Header from "../components/header.jsx";
 
class Home extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <h1>Home Page</h1>
        </div>
    )
  }
}

export default Home;