import React, {Component} from 'react';

class QuizQuestionButton extends Component {
    handleClick() {
        this.props.clickHandler(this.props.button_text);
    }
    render() {
        return (<li className="answerOption">
                <label className="radioCustomLabel" htmlFor="check3"><input type="checkbox" id="check3" className="radioCustomButton"
                onClick={this.handleClick.bind(this)}/>{this.props.button_text}</label>
            </li>);
    }
}

export default QuizQuestionButton;
