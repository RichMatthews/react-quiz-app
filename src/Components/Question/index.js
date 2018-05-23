import React from 'react';
import { connect } from 'react-redux';
import data from '../../data.js';
import './index.css';

class Question extends React.Component {
  findQuestion = () => {
    try{
      return data.find(question => question.category === 'geography').questions[0].title
    }catch(e){
      console.log('error');
    }
  }

  render(){

    return(
      <div className="question">
          {this.findQuestion()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  currentQuestion: state.currentQuestion
});

const mapDispatchToProps = (dispatch) => ({

})

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Question);
