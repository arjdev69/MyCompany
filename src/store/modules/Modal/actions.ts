export function setVisibleModal(visible: {}) {
  return {
    type: '@UPDATE_VALUE/VISIBLE_MODAL',
    payload: {visible},
  };
}
