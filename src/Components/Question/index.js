import React from 'react';
import { connect } from 'react-redux';
import data from '../../data.js';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mappingFunctions';
import findQuestions from '../../utils/findQuestions';
import './index.css';

class Question extends React.Component {

  state = {
    category: ''
  }

  componentDidMount = () => {
    this.setState({category: this.props.currentUserStatus.currentCategory})
  }

  findQuestion = () => {
    try{
      return findQuestions(data, this.state.category, this.props.currentUserStatus, this.props.currentQuestion).title;
    }catch(e){
      //console.log('answer error');
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);
