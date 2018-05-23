import { combineReducers } from 'redux';
import currentQuestion from './currentQuestion';
import questions from './questions';
import answer from './answer';
import results from './results';

const rootReducer = combineReducers({
  questions,
  answer,
  currentQuestion,
  results
});

export default rootReducer;
