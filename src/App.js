import React, { Component } from 'react';
import { connect } from 'react-redux';
import Types from './redux/types';
import Button from '@material-ui/core/Button';
import Question from './Components/Question/index.js';
import Answer from './Components/Answer/index.js';
import Completed from './Components/Completed/index.js';
import './App.css';

class App extends Component {

  state = {
    quizFinished: false,
    total: 0,
    animate: false,
  }

  componentDidMount = () => {
    this.props.initiateQuiz();
  }

  componentWillReceiveProps = (nextProps) => {
    const lastQuestionIndex = nextProps.results.findIndex(current => current.id === this.props.currentQuestion);
    const questionListLength = nextProps.results.length - 1;
    if(lastQuestionIndex === questionListLength){
      this.finishQuiz();
    }
  }

  componentWillUnmount = () => {
    this.setState({animate: false})
  }

  finishQuiz = () => {
    const results = this.props.results;
    const questions = this.props.questions;
    let counter = 0;
    results.forEach((result) => {
      questions.forEach((question) => {
        if (result.id === question.questionId){
          if(result.correctAnswer === question.answer){
            counter += 1
          }
        }
      })
    })
    this.setState({quizFinished: true})
    this.setState({total: counter})
  }

  test = () => {
    console.log('hi');
    this.setState({animate: true})
  }

  render() {
    console.log(this.state.animate, 'an?');
    return (
      <div className={`App ${this.state.animate ? 'animate' : ''}`}>
        <Question />
        <Answer />
        <Button
          color="primary"
          onClick={() => this.props.submitQuestion({questionId: this.props.currentQuestion, answer: this.props.answer})}>
          {'submit'}
        </Button>
        <Button
          color="primary"
          onClick={this.finishQuiz}>
          {'finish quiz'}
        </Button>
        <div>
          {
            this.state.quizFinished ?
              <Completed />
              :
              null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  answer: state.answer,
  currentQuestion: state.currentQuestion,
  results: state.results
});

const mapDispatchToProps = (dispatch) => ({
  submitQuestion: (answer) => {
    dispatch({
      type: Types.SUBMIT_QUESTION,
      answer: answer
    });
    dispatch({
      type: Types.NEXT_QUESTION
    })
  },
  initiateQuiz: () => {
    dispatch({
      type: Types.INITIATE_QUIZ
    })
  }
})

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
