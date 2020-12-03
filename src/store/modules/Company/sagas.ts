import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from 'services';

import {setListCompanys, setDetailCompany} from './actions';

export function* getListTasks({payload}) {
  try {
    const resp = yield call(api.get, 'enterprises', {
      params: {
        name: payload.filter.name,
        enterprise_types: payload.filter.types,
      },
    });

    yield put(setListCompanys(resp.data.enterprises));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail' + err,
    );
    yield put(setListCompanys([]));
  }
}

export function* getDetailCompany({payload}) {
  try {
    const resp = yield call(api.get, `enterprises/${payload._id}`);
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
