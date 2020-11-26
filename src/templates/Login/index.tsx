import React from 'react';
import * as UI from 'react-native';

import {LoginForm, Background} from 'components';

const Login: React.FC = () => {
  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <LoginForm />
      </Background>
    </UI.View>
  );
};

export default Login;
