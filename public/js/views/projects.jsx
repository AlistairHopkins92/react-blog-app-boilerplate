'use strict';
import React from 'react';
import Header from "../components/header.jsx";
 
class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.projects = [
      {
        name: "Project 1"
      },
      {
        name: "Project 2"
      },
      {
        name: "Project 3"
      },
      {
        name: "Project 4"
      },
      {
        name: "Project 5"
      },
      {
        name: "Project 6"
      }
    ];
  }

  buildProjects() {
    let projects = [];
    for (let i=0; i<this.projects.length; i++) {
      projects.push(
        <div className="col-sm-4 col-md-3 projects__card">
          <div className="projects__image">
          </div>
          <div className="projects__content">
            <h3>{ this.projects[i].name }</h3>
          </div>
        </div>
      );
    }
    return projects;
  }

  render() {
    return (
      <div className="projects">
        <Header/>
        <div className="container">
          { this.buildProjects() }
        </div>
      </div>
    );
  }
}

export default Projects;