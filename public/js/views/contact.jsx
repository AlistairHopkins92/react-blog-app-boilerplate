'use strict';

import React from 'react';
import Header from "../components/header.jsx";

class Contact extends React.Component {
  
  render() {
    return (
        <div className="contact">
          <Header/>
            <div className="container">
              <div className="col-sm-6">
                <div className="contact__post card card-2">
                  <h1>Contact</h1>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="contact__post card card-2">
                  <h1>Funk is getting shot</h1>
                </div>
              </div>              
            </div>
          </div>
    ) 
  }
}

export default Contact;