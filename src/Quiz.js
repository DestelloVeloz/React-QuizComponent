import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

//setting equal the variable to the contents of a data file
let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
      //calling super passing the props variable
        super(props);
        this.state = {
            quiz_position: 1,
            isQuizEnd: false
        };
    }

    showNextQuestion() {
        if(this.state.quiz_position === quizData.quiz_questions.length) {
            this.setState({
                isQuizEnd: true
            })
        }
        else {
            this.setState(prevState => ({
                quiz_position: prevState.quiz_position + 1
            }));
        }
    }

    handleResetClick() {
        this.setState({
            quiz_position: 1
        });
    }

    render() {
        return ( <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    ><div>
            <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            {
                this.state.isQuizEnd ?
                <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/> :
                ''
            }

        </div>
        </ReactCSSTransitionGroup>
      );
    }
  }

  export default Quiz;
