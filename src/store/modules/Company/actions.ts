export function getListCompanys() {
  return {
    type: '@UPDATE_VALUE/GET_LIST_COMPANYS',
  };
}

export function setListCompanys(companys: any) {
  return {
    type: '@UPDATE_VALUE/SET_LIST_COMPANYS',
    payload: {companys},
  };
}

export function getDetailCompany(_id: any) {
  return {
    type: '@UPDATE_VALUE/GET_DETAIL_COMPANY',
    payload: {_id},
  };
}

export function setDetailCompany(company: any) {
  return {
    type: '@UPDATE_VALUE/SET_DETAIL_COMPANY',
    payload: {company},
  };
}
