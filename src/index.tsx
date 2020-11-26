import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import 'react-native-gesture-handler';

import {store, persistor} from './store';

import App from './routes';
import {COLORS} from 'styles';

const Src: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={COLORS.primary} barStyle={'default'} />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Src;
