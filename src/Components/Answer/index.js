import React from 'react';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import Types from '../../redux/types';
import data from '../../data.js';
import './index.css';

class Answer extends React.Component {

  findAnswers = () => {
    try{
      return data.questions.find(question => question.id === this.props.currentQuestion).possibleAnswers
    }catch(e){
      console.log('error');
    }
  }

  render(){
    return(
      <div className="answers">
        {this.findAnswers() ?
          this.findAnswers().map((answer) => {
            return (
            <div onChange={(e) => this.props.updateAnswer(e)}>
              <Radio
                checked={this.props.answer === answer.title}
                value={answer.title}
                name="answers"
              />
              {answer.title}
            </div>)
          })
          :
          <div> You have finished the Quiz :) </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  currentQuestion: state.currentQuestion
});

const mapDispatchToProps = (dispatch) => ({
  updateAnswer: (answer) => {
    const selectedAnswer = answer.target.value;
    dispatch({
      type: Types.UPDATE_ANSWER,
      answer: selectedAnswer
    });
  }
})

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Answer);
