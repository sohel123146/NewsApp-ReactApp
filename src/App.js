import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  c = 'sohel'
  render() {
    return (
      <div>
        HI this is my first class based component {this.c}
      </div>
    )
  }
}


