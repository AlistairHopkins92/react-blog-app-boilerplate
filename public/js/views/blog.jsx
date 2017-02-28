'use strict';
import React from 'react';
import Header from "../components/header.jsx";
 
class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.blogPost = [
      {
        name: "Blog Post 1",
        date: "Feb 12",
        textBody: "What is vice? ’Tis what you have often seen. Have this thought ready on all emergences that they are such things as you have often seen: you’ll find all things, earlier or later, just the same."
      },
      {
        name: "Blog Post 2",
        date: "Feb 13",
        textBody: "Such matters as fill all histories of the antient, or middle, or present ages: of such things, all cities and families are full. Nothing is new. Every thing is ordinary, and of short duration."
      },
      {
        name: "Blog Post 3",
        date: "Feb 15",
        textBody: "How can the grand maxims of life ever become dead in the soul, unless the opinions suitable to them be extinguished? And it is still in your power to revive and kindle again these true opinions."
      },
      {
        name: "Blog Post 4",
        date: "Feb 16",
        textBody: "I can always have the sentiments I ought to have about such things; why, then, am I disturbed?"
      },
      {
        name: "Blog Post 5",
        date: "Feb 17",
        textBody: "What is external to my soul, is of no consequence to it. Be thus persuaded, and you stand upright and firm."
      },
      {
        name: "Blog Post 6",
        date: "Feb 19",
        textBody: "You may revive when you please. Consider things again, as you have done formerly. This is reviving again."
      }
    ];
  }

  buildBigPosts() {
    let blogPosts = [];
    for (let i=0; i<this.blogPost.length; i++) {
      blogPosts.push(
        <div className="col-sm-8 col-md-8">
          <h3>{ this.blogPost[i].name }</h3>
          <div>{ this.blogPost[i].date }</div>
          <div>{ this.blogPost[i].textBody }</div>
        </div>
      );
      }
    return blogPosts;
  }

  buildSmallPosts() {
    let recentBlogPosts = [];
    for (let i=0; i<this.blogPost.length; i++) {
      if(i > this.blogPost.length - 4){
        recentBlogPosts.unshift(
        <div className="col-sm-9 col-md-9">
              <div><a href="/">{ this.blogPost[i].name }</a> - { this.blogPost[i].date } </div>
        </div>
      );
      }
    }
    return recentBlogPosts;
  }

  render() {
    return (
      <div className="blog">
        <Header/>
        <div className="container">
          <div className="col-sm-9">
            <div className="blog__post card card-2">
                <h3>Main Body</h3>
                <div className="container">
                  {this.buildBigPosts()}
                </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog__recent card card-2">
              <h3>Recent Posts</h3>
              <div className="container">
                { this.buildSmallPosts() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;