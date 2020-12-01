import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from 'services';

import {setListCompanys, setDetailCompany} from './actions';

export function* getListTasks() {
  try {
    const resp = yield call(api.get, 'enterprises');

    yield put(setListCompanys(resp.data.enterprises));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail' + err,
    );
    console.log(err);
  }
}

export function* getDetailCompany({payload}) {
  try {
    const resp = yield call(api.get, `enterprises/${payload._id}`);
    //console.log(resp.data);
    yield put(setDetailCompany(resp.data));
  } catch (err) {
    yield put(setDetailCompany([]));
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

export default all([
  takeLatest('@UPDATE_VALUE/GET_LIST_COMPANYS', getListTasks),
  takeLatest('@UPDATE_VALUE/GET_DETAIL_COMPANY', getDetailCompany),
]);
