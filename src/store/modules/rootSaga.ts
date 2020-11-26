import {all} from 'redux-saga/effects';

import tasks from './Places/sagas';

export default function* rootSaga() {
  return yield all([tasks]);
}
