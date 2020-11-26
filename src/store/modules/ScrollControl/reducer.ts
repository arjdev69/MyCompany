import produce from 'immer';

const INITIAL_STATE = {
  scrollControl: 0,
};

export default function scroll(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      scrollControl: number;
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/SET_SCROLL': {
        draft.scrollControl = action.payload.scrollControl;
        break;
      }
      default:
    }
  });
}
