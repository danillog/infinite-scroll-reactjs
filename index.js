import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import List from './List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <List />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
