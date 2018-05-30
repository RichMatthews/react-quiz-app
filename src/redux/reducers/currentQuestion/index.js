import Types from '../../types';
const initialState = {
  questionId: 'ques1000',
  currentAnswer: ''
};

const nextQuestion = (id) => {
  let getId = id.slice(4, 9);
  let makeIdNumber = Number(getId);
  let newId = makeIdNumber + 1
  return `ques${newId}`
}

export default(state = initialState, action) => {
  switch(action.type){
    case Types.NEXT_QUESTION: {
      return {
        ...state,
        questionId: nextQuestion(action.answer.questionId)
      };
    }
    case Types.UPDATE_ANSWER: {
      return {
        ...state,
        currentAnswer: action.answer
      };
    }
    default:
      return state;
  }
}
