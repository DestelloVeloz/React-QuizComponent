import React, { Component } from 'react'
import Quiz from './Quiz.js'
import './App.css'

class App extends Component {
  render() {
    return (
      //instead of returning an empty div, we are returning the empty Quiz component
      <Quiz />
    )
  }
}

export default App
