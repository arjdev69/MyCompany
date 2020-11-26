import React from 'react';

import {Box, Input, ButtonCustom, Label} from 'components';

const BoxForm: React.FC = () => {
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
          console.log('1');
        }}
        style={{}}>
        <Label style={{}}>LABEL</Label>
      </ButtonCustom>
    </Box>
  );
};

export default BoxForm;
