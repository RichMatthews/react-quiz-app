import React from 'react';
import { connect } from 'react-redux';
import './index.css'

class Completed extends React.Component {
  render(){
    return(
      <div>
        {
          this.props.results.map(result => (
            this.props.questions.map(question => (
              result.id === question.questionId ?
                <div className="individualAnswer">You put {question.answer}, the correct answer is: {result.correctAnswer}</div>
                :
                null
              )
            )
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  answer: state.answer,
  currentQuestion: state.currentQuestion,
  results: state.results
});

  export default connect(
    mapStateToProps,
  )(Completed);
