import produce from 'immer';

const INITIAL_STATE = {
  _id: 0,
  data: null,
  companys: [],
  company: [],
  loading: false,
};

export default function Companys(
  state = INITIAL_STATE,
  action: {
    type: any;
    payload: {
      _id: any;
      data: null;
      companys: [];
      company: [];
      loading: false;
    };
  },
) {
  return produce(state, draft => {
    switch (action.type) {
      case '@UPDATE_VALUE/GET_LIST_COMPANYS': {
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_LIST_COMPANYS': {
        draft.companys = action.payload.companys;
        draft.loading = false;
        break;
      }
      case '@UPDATE_VALUE/GET_DETAIL_COMPANY': {
        draft._id = action.payload._id;
        draft.loading = true;
        break;
      }
      case '@UPDATE_VALUE/SET_DETAIL_COMPANY': {
        draft.company = action.payload.company;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
