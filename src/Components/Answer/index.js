import React from 'react';
import { connect } from 'react-redux';
import data from '../../data.js';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import findQuestions from '../../utils/findQuestions';
import './index.css';
class Answer extends React.Component {

  state = {
    category: ''
  }

  componentDidMount = () => {
    this.setState({category: this.props.currentUserStatus.currentCategory})
  }

  findAnswers = () => {
    try{
      return findQuestions(data, this.state.category, this.props.currentUserStatus, this.props.currentQuestion).possibleAnswers;
    }catch(e){
      //console.log('answer error');
    }
  }

  render(){
    return(
      <div className="answers">
        { this.state.category &&
          this.state.category.length > 1 &&
          this.findAnswers() ?
          this.findAnswers().map((answer, index) => {
            return (
            <div key={index} onChange={(e) => this.props.updateAnswer(e)}>
              <input
                type="radio"
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
