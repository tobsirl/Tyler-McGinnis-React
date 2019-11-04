import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';

function isAuthed() {
  return true;
}

function showWarning() {
  return false;
}

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Battle />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
