import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

//setting equal the variable to the contents of a data file
let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    //calling super passing the props variable
    super(props)
    this.state = {quiz_position: 1 }
  }
  render() {
    const isQuizEnd = ((this.state.quiz_position -1)) === quizData.quiz_questions.length)
    //a condition that checks the value of its quiz that displays the QuizEnd component if true and the QuizQuestion component if false
    return (
      <div>
        {isQuizEnd ? <QuizEnd /> :
        <QuizQuestion quiz_question={quizData.quiz_questions
          [this.state.quiz_position - 1]}/>}
      </div>
    )
  }
}

export default Quiz
