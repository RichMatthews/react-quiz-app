import { LOCATION_CHANGE } from 'react-router-redux';
import data from '../../../data';
const initialState = {
  currentCategory: '',
  currentCategoryId: 0,
  currentQuizId: 0,
};

const findCurrentCategoryId = (cat) => {
  try {
    const category = data.find(c => c.categoryName === cat)
    return category.categoryId;
  }catch(e){

  }
}

export default(state = initialState, action) => {
  switch(action.type){
    case LOCATION_CHANGE: {
    const path = window.location.href;
    const splitPath = path.split('/');
    const regex = /categories\/(\w+)(?=\/?)/;
    const quizId = splitPath.pop();
    try {
      const category = path.match(regex)[1];
      return {
        ...state,
        currentCategory: category,
        currentCategoryId: findCurrentCategoryId(category),
        currentQuizId: quizId,
      }
    } catch(e){
      return {
        ...state,
        currentCategory: 'no category',
        currentCategoryId: 0,
        currentQuizId: quizId,
      }
    }
    }
  default:
    return state;
  }
}
