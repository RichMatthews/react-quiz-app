import Types from '../../types';
const initialState = '';

export default(state = initialState, action) => {
  switch(action.type){
    case Types.UPDATE_ANSWER: {
      const answer = action.answer
      return answer;
    }
    default:
      return state;
  }
}
