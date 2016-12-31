'use strict';
import React from 'react';
import Header from "../components/header.jsx";
 
class Home extends React.Component {
  render() {
    return (
        <div className="home">
            <Header/>
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 home__img">Profile image here</div>
                  <div className="col-sm-8 home__desc">Site intro here</div>
                </div>
                <div className="row">
                  <div className="col-sm-12 home__icons">Social media icons here</div>
                </div>
              </div>
        </div>
    )
  }
}

export default Home;