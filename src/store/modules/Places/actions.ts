export function getListTasks() {
  return {
    type: '@UPDATE_VALUE/GET_LIST_TASKS',
  };
}

export function setListTasks(tasks: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_TASKS',
    payload: {tasks},
  };
}

export function getDetailPlace(_id: any) {
  return {
    type: '@UPDATE_VALUE/GET_DETAIL_PLACE',
    payload: {_id},
  };
}

export function setDetailPlace(place: any) {
  return {
    type: '@UPDATE_VALUE/SET_DETAIL_PLACE',
    payload: {place},
  };
}
