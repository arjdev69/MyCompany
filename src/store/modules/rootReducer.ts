import {combineReducers} from 'redux';

import Modal from './Modal/reducer';
import Auths from './auth/reducer';
import Companys from './Company/reducer'

export default combineReducers({
  Modal,
  Auth: Auths,
  Company: Companys
});
