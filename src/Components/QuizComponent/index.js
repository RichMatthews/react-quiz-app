import React from 'react';
import Question from '../Question';
import Answer from '../Answer';

class QuizComponent extends React.Component {
  render(){
    const { ...props } = this.props;
    return(
      <div>
        {console.log({...props.location.pathname})}
        <Question />
        <Answer />
      </div>
    )
  }

}

export default QuizComponent;
