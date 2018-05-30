import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import currentQuestion from './currentQuestion';
import quizResults from './quizResults';
import currentUserStatus from './currentUserStatus';
import questions from './questions';

const rootReducer = combineReducers({
  questions,
  currentQuestion,
  currentUserStatus,
  quizResults,
  router: routerReducer
});

export default rootReducer;
