import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';


class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        };
    }

    handleClick(buttonText) {
        if(this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler();
            this.setState({
                incorrectAnswer: false
            });
        } else {
            this.setState({
                incorrectAnswer: true
            });
        }
    }

    render() {
        return (<main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
                (answer_option, index) => (<QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_option}/>)

            )}

            {this.state.incorrectAnswer?
                <p className="error">Sorry, thats not right</p>
                : null
            }

          </ul>
        </section>
      </main>);
    }
}

export default QuizQuestion;
