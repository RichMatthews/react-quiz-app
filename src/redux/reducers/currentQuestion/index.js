import Types from '../../types';
const initialState = 1000;

export default(state = initialState, action) => {
  switch(action.type){
    case Types.NEXT_QUESTION: {
      return state + 1;
    }
    case Types.PREVIOUS_QUESTION: {
      return state - 1;
    }
    default:
      return state;
  }
}
