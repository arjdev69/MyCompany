import React from 'react';
import * as UI from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from 'store/modules/auth/actions';

import {Login} from 'templates';
import {Loading} from 'components';

import {styles} from './styles';
import {COLORS} from 'styles';

const LoginView: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state: any) => state.Auth.loading);

  const requestLogin = (email: any, passw: any) => {
    dispatch(signInRequest(email, passw));
  };

  return (
    <UI.View>
      {loading && (
        <Loading
          size={'large'}
          color={COLORS.nextColor}
          styles={styles.loading}
        />
      )}
      <Login requestLogin={requestLogin} />
    </UI.View>
  );
};

export default LoginView;
