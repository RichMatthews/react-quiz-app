import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Question from '../Question';
import Answer from '../Answer';
import Completed from '../Completed';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';

class QuizComponent extends React.Component {

  state = {
    quizFinished: false,
  }

  componentDidMount = () => {
    this.props.loadQuestionsForChosenCategory(
      this.props.currentUserStatus.currentCategory,
      this.props.currentUserStatus.currentQuizId,
    )
  }

  componentWillReceiveProps = (nextProps) => {
    const lastQuestionIndex = nextProps.questions.findIndex(current => current.questionId === this.props.currentQuestion.questionId);
    const questionListLength = nextProps.questions.length - 1;
    if(lastQuestionIndex === questionListLength){
      this.finishQuiz();
    }
  }

  finishQuiz = () => {
    const quizResults = this.props.quizResults;
    const questions = this.props.questions;
    let counter = 0;
    quizResults.answers.forEach((answer) => {
      questions.forEach((question) => {
        if (answer.id === question.questionId){
          if(answer.correctAnswer === question.answer){
            counter += 1
          }
        }
      })
    })
    this.setState({quizFinished: true})
    this.setState({total: counter})
  }

  render(){
    return(
      <div>
        <Question />
        <Answer />
        <Button
          color="primary"
          onClick={() => this.props.submitQuestion({questionId: this.props.currentQuestion.questionId, answer: this.props.currentQuestion.currentAnswer})}>
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
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizComponent);
