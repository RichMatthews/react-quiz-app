import Types from '../../types';
const initialState = [
    {
      id: 1000,
      title: 'What is the capital of France',
      correctAnswer: 'Paris',
      possibleAnswers: [
        {title: 'London'},
        {title: 'Paris'},
        {title: 'Berlin'},
        {title: 'Brussels'},
      ]
    },
    {
      id: 1001,
      title: 'What is the capital of UK',
      correctAnswer: 'London',
      possibleAnswers: [
        {title: 'London'},
        {title: 'Sydney'},
        {title: 'Zagreb'},
        {title: 'Munich'},
      ]
    },
  ];

export default(state = initialState, action) => {
  switch(action.type){
    case Types.INITIATE_QUIZ: {
      return state;
    }
    default:
      return state;
  }
}
