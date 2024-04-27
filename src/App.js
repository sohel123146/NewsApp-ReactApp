import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar mode = {this.mode} togglemode = {this.togglemode}/>
        <News mode = {this.mode}/>
      </div>
    )
  }
}


