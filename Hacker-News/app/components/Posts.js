import React, { Component } from 'react';

export default class Posts extends Component {
  state = {
    posts: null,
    error: null,
    loading: true
  };

  render() {
    return (
      <div className="container">
        <h1>Hacker</h1>
      </div>
    );
  }
}
