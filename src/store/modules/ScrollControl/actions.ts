export function setScrollRef(scrollControl: number) {
  return {
    type: '@UPDATE_VALUE/SET_SCROLL',
    payload: {scrollControl},
  };
}
