import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from 'services';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'users/auth/sign_in', {
      email,
      password,
    });

    const login = {
      token: response.headers['access-token'],
      uid: response.headers.uid,
      client: response.headers.client,
    };

    if (login) {
      api.defaults.headers.Authorization = `Bearer ${login.token}`;
      api.defaults.headers['access-token'] = login.token;
      api.defaults.headers['uid'] = login.uid;
      api.defaults.headers['client'] = login.client;
    }

    yield put(signInSuccess(login, response.data));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados: ' + err,
    );
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) {
    return;
  }

  const {login} = payload.Auth;

  if (login) {
    api.defaults.headers.Authorization = `Bearer ${login.token}`;
    api.defaults.headers['access-token'] = login.token;
    api.defaults.headers['uid'] = login.uid;
    api.defaults.headers['client'] = login.client;
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
