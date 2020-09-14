import { CountAction, countInitState, CountState } from '../actions/count';

export const countReducer = (
  state: CountState = countInitState,
  action: CountAction
) => {
  switch (action.type) {
    case 'INCREASE': {
      return {
        count: state.count + 1,
      };
    }
    case 'DECREASE': {
      return {
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};
