import produce from 'immer';

const INITIAL_STATE = {
  visible: {
    modal: false,
  },
};

export default function modal(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      visible: {
        modal: false;
      };
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/VISIBLE_MODAL': {
        draft.visible = action.payload.visible;
        break;
      }
      default:
    }
  });
}
