import {all} from 'redux-saga/effects';

import tasks from './Company/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([tasks, auth]);
}
