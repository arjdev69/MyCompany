import React from 'react';

import {Box, Input, ButtonCustom, Label} from 'components';

export interface Props {
  requestLogin: any;
}

const BoxForm: React.FC<Props> = _props => {
  return (
    <Box>
      <Input
        icon="mail-outline"
        autoCorrect={false}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Digite seu e-mail"
        returnKeyType="next"
        //onSubmitEditing={() => passwordRef.current.focus()}
        //value={email}
        //onChangeText={setEmail}
      />

      <Input
        icon="lock-outline"
        secureTextEntry
        placeholder="Sua senha secreta"
        //ref={passwordRef}
        returnKeyType="send"
        //onSubmitEditing={handleSubmit}
        //value={password}
        //onChangeText={setPassword}
      />
      <ButtonCustom
        loading={false}
        activeOpacity={0.6}
        onPress={() => {
          _props.requestLogin('testeapple@ioasys.com.br', '12341234');
        }}
        style={{}}>
        <Label style={{}}>LABEL</Label>
      </ButtonCustom>
    </Box>
  );
};

export default BoxForm;
