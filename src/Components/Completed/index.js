import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import './index.css'

class Completed extends React.Component {
  render(){
    return(
      <div>
        {
          this.props.quizResults.answers.map(result => (
            this.props.questions.map(question => (
              result.questionId === question.questionId ?
                <div className="individualAnswer">You put {result.answer}, the correct answer is: {question.correctAnswer}</div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Completed);
