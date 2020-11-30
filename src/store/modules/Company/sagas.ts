import {Alert} from 'react-native';

import {takeLatest, all, call, put} from 'redux-saga/effects';

import api from 'services';

import {
  setListCompanys,
  // setDetailPlace,
} from './actions';

export function* getListTasks({payload}) {
  const {data} = payload;
  try {
    const resp = yield call(api.get, 'enterprises', {
      client: data.login.client,
      uid: data.login.uid,
      'access-token': data.login.token,
    });

    yield put(setListCompanys(resp.data.enterprises));
  } catch (err) {
    Alert.alert(
      'Falha na requisição',
      'Houve um erro no retorno dos dados, envie um e-mail' + err,
    );
    console.log(err);
  }
}

// export function* getDetailPlace({payload}) {
//   try {
//     const resp = yield call(api.get, `places/${payload._id}`);

//     yield put(setDetailPlace(resp.data));
//   } catch (err) {
//     yield put(setDetailPlace([]));
//     Alert.alert(
//       'Falha na requisição',
//       'Houve um erro no retorno dos dados, envie um e-mail',
//     );
//   }
// }

export default all([
  takeLatest('@UPDATE_VALUE/GET_LIST_TASKS', getListTasks),
  // takeLatest('@UPDATE_VALUE/GET_DETAIL_PLACE', getDetailPlace),
]);