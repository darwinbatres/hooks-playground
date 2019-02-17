import { ADD, SUBSTRACT } from "./actions";

export const initialState = {
  count: 0
};

const countReducer = (state, action) => {
  switch (action.type) {
    case ADD: {
      return { ...state, count: state.count + 1 };
    }

    case SUBSTRACT: {
      return { ...state, count: state.count - 1 };
    }

    default:
      return state;
  }
};

export default countReducer;
