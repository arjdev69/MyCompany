import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {View, TextInput} from 'react-native';

export interface Props {
  style: {};
  icon: String;
  placeHolder?: string | undefined;
  max: number;
  value: any;
  onChangeText: any;
  returnKeyType: any;
}

const Input: React.FC<Props> = (props) => {
  return (
    <View style={props.style}>
      {props.icon && <Icon name={props.icon} size={30} color="#F3E9D2" />}
      <TextInput {...props} />
    </View>
  );
};

export default Input;
