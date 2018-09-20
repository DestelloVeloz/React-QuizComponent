import React, { Component } from 'react'
import update from 'react-addons-update'
import Quiz from './Quiz.js'
import logo from './svg/logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz</h2>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App
