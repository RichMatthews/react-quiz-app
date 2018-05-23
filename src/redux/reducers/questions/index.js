import Types from '../../types';
const initialState = [];

export default(state = initialState, action) => {
  switch(action.type){
    case Types.SUBMIT_QUESTION: {
      const answerInfo = {
        questionId: action.answer.questionId,
        answer: action.answer.answer
      }
      const answer = [].concat(state).concat(answerInfo)
      return answer;
    }
    default:
      return state;
  }
}
