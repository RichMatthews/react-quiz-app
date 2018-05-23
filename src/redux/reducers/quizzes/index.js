import Types from '../../types';
const initialState = [];

export default(state = initialState, action) => {
  switch(action.type){
    case Types.LOCATION_CHANGE: {
      return state;
    }
    default:
      return state;
  }
}
