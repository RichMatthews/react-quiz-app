import Types from '../../types';
import data from '../../../data';

const initialState = [];

export default(state = initialState, action) => {
  switch(action.type){
    case Types.LOAD_QUESTIONS_FOR_CHOSEN_CATEGORY: {
      const category = data.find(c => c.categoryName === action.categoryName).quizzes;
      const findQuiz = category.find(quiz => quiz.quizId === action.categoryId)
      return [].concat(findQuiz.questions);
    }
    default:
      return state;
  }
}
