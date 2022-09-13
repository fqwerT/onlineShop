
import { increment, decrement} from './types'

const initialState = {
  amount: 1
};

export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        amount: state.amount + 1,
      };

    case decrement:
      return {
        ...state,
        amount: state.amount - 1,
      };

    default:
      return state;
  }
};
