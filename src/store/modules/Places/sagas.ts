import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from '../../../services';

import {
  setListTasks,
  setDetailPlace,
} from '../../../store/modules/Places/actions';

export function* getListTasks() {
  try {
    const resp = yield call(api.get, 'lista');

    yield put(setListTasks(resp.data));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

export function* getDetailPlace({payload}) {
  try {
    const resp = yield call(api.get, `places/${payload._id}`);

    yield put(setDetailPlace(resp.data));
  } catch (err) {
    yield put(setDetailPlace([]));
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail',
    );
  }
}

export default all([
  takeLatest('@UPDATE_VALUE/GET_LIST_TASKS', getListTasks),
  takeLatest('@UPDATE_VALUE/GET_DETAIL_PLACE', getDetailPlace),
]);
