import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {View, TextInput} from 'react-native';

export interface Props {
  styleBox: {};
  style: {};
  color: String;
  icon: String;
}

const Input: React.FC<Props> = props => {
  return (
    <View style={props.styleBox}>
      {props.icon && <Icon name={props.icon} size={30} color={props.color} />}
      <TextInput {...props} />
    </View>
  );
};

export default Input;
