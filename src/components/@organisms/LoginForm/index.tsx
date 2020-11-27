import React from 'react';

import {Container} from './styles';

import {BoxLogo, BoxForm} from 'components';

export interface Props {
  requestLogin: any;
}

const LoginForm: React.FC<Props> = _props => {
  return (
    <Container>
      <BoxLogo />
      <BoxForm requestLogin={_props.requestLogin} />
    </Container>
  );
};

export default LoginForm;
