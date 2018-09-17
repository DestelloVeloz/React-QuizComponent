import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'

//setting equal the variable to the contents of a data file
let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    //calling super passing the props variable
    super(props)
    this.state = {quiz_position: 1 }
  }
  render() {
    return (
      <div>
        <QuizQuestion quiz_question={quizData.quiz_questions
          [this.state.quiz_position - 1]}/>
      </div>
    )
  }
}

export default Quiz
