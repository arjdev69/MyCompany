import React from 'react';

import {Container} from './styles';

import {BoxLogo, BoxForm} from 'components';

const LoginForm: React.FC = () => {
  return (
    <Container>
      <BoxLogo />
      <BoxForm />
    </Container>
  );
};

export default LoginForm;
