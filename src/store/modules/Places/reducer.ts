import produce from 'immer';

const INITIAL_STATE = {
  _id: 0,
  tasks: [],
  place: [],
  loading: false,
};

export default function Tasks(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      _id: any;
      tasks: [];
      place: [];
      loading: false;
    };
  },
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@UPDATE_VALUE/GET_LIST_TASKS': {
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_LIST_TASKS': {
        draft.tasks = action.payload.tasks;
        draft.loading = false;
        break;
      }
      case '@UPDATE_VALUE/GET_DETAIL_PLACE': {
        draft._id = action.payload._id;
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_DETAIL_PLACE': {
        draft.place = action.payload.place;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
