import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionType";


const initialState = {
  isloading: false,
  counter: 0,
  error: null,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };

    case DECREMENT_COUNTER:
      return {
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};
