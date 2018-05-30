import Types from '../../types';
const initialState = {
  answers: []
};

export default(state = initialState, action) => {
  switch(action.type){
    case Types.SUBMIT_QUESTION: {
      const answerInfo = {
        questionId: action.answer.questionId,
        answer: action.answer.answer
      }
      return {
        ...state,
        answers: [].concat(...state.answers).concat(answerInfo)
      };
    }
    default:
      return state;
  }
}
