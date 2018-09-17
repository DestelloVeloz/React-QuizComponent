import React, { Component } from 'react'

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
      <div><div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div></div>
    )
  }
}

export default Quiz
