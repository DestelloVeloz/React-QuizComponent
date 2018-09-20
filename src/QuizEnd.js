import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class QuizEnd extends Component {
    handleResetClick() {
        this.props.resetClickHandler();
    }

    render() {
           return (
             <ReactCSSTransitionGroup
                className="container result"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
   >
        <div>
           <p>Thanks for playing!</p>
           <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
         </div>
         </ReactCSSTransitionGroup>
       );
       }
   }

   export default QuizEnd;
