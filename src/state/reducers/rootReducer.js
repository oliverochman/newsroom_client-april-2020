import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION': 
      debugger;
    default:
      return state;
  }
};
export default rootReducer;
