export function getListCompanys(data: any) {
  return {
    type: '@UPDATE_VALUE/GET_LIST_TASKS',
    payload: {data},
  };
}

export function setListCompanys(companys: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_TASKS',
    payload: {companys},
  };
}

export function getDetailCompanys(_id: any) {
  return {
    type: '@UPDATE_VALUE/GET_DETAIL_PLACE',
    payload: {_id},
  };
}

export function setDetailCompanys(place: any) {
  return {
    type: '@UPDATE_VALUE/SET_DETAIL_PLACE',
    payload: {place},
  };
}
