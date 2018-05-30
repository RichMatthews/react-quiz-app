import Types from '../../redux/types';

export const mapStateToProps = state => ({
  questions: state.questions,
  currentQuestion: state.currentQuestion,
  currentUserStatus: state.currentUserStatus,
  quizResults: state.quizResults,
});

export const mapDispatchToProps = (dispatch) => ({
  updateAnswer: (answer) => {
    const selectedAnswer = answer.target.value;
    dispatch({
      type: Types.UPDATE_ANSWER,
      answer: selectedAnswer
    });
  },
  loadQuestionsForChosenCategory: (categoryName, categoryId) => {
    dispatch({
      type: Types.LOAD_QUESTIONS_FOR_CHOSEN_CATEGORY,
      categoryName: categoryName,
      categoryId: categoryId,
    });
  },
  getCategory: (category) => {
    dispatch({
      type: Types.GET_CATEGORY,
      category: category
    });
  },
  changeCategory: (newCategory) => {
    dispatch({
      type: Types.CHANGE_CATEGORY,
      currentCategory: newCategory
    });
  },
  submitQuestion: (answer) => {
    dispatch({
      type: Types.SUBMIT_QUESTION,
      answer: answer
    });
    dispatch({
      type: Types.NEXT_QUESTION,
      answer: answer
    })
  },
});
