import React from 'react';
import {ActivityIndicator} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

export interface Props {
  children: any;
  loading: false;
  onPress: any;
  style: {};
  textStyle: {};
}

const Button: React.FC<Props> = (props) => {
  return (
    <RectButton
      style={props.style}
      onPress={props.onPress}
      enabled={!props.loading}>
      {props.loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        props.children
      )}
    </RectButton>
  );
};

export default Button;
