export default(data, category, currentUserStatus, currentQuestion) => {
  const categoryQuizzes = data.find(cat => cat.categoryName === category).quizzes;
  const getQuiz = categoryQuizzes.find(category => category.quizId === currentUserStatus.currentQuizId).questions;
  const findQuestion = getQuiz.find(question => question.questionId === currentQuestion.questionId);
  return findQuestion;
}
