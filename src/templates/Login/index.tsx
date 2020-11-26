import React from 'react';

import {LoginForm} from 'components';
import * as UI from 'react-native';

const Login: React.FC = () => {
  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <LoginForm />
    </UI.View>
  );
};

export default Login;
