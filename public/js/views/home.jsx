'use strict';
import React from 'react';
import Header from "../components/header.jsx";
 
class Home extends React.Component {
  render() {
    return (
        <div className="home">
            <Header/>
              <div className="container">
                  <div className="col-sm-4 home__img">
                    <span className="home__headshot card card-3"><img src="./public/images/headshot.jpg"/></span>
                  </div>
                  <div className="col-sm-8 home__desc">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dignissimos eveniet fugit nemo optio quasi cum consectetur quas a eum! Ab aliquam, vel accusantium a repellendus? Magnam non illo quisquam.</h2>
                  </div>
                  <div className="col-sm-12 home__icons">
                    <span>
                      <a href="http://www.github.com/chansecampbell" target="_blank"><i className="fa fa-github-square" aria-hidden="true"></i></a>
                      <a href="http://www.linkedin.com/in/chansecampbell" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                      <a href="http://www.twitter.com/chansecampbell" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                    </span>
                  </div>
              </div>
        </div>
    )
  }
}

export default Home;