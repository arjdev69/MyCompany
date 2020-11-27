import {combineReducers} from 'redux';

//import messages from './messages/reducer';
import Modal from './Modal/reducer';
import Place from './Places/reducer';
import Scrolls from './ScrollControl/reducer';
import Auths from './auth/reducer';

export default combineReducers({
  Places: Place,
  Modal: Modal,
  Scroll: Scrolls,
  Auth: Auths,
});
