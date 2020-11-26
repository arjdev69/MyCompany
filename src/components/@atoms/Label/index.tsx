import React from 'react';
import {Text} from 'react-native';

export interface Props {
  style: any;
}

const Label: React.FC<Props> = (props) => {
  return <Text style={props.style}>{props.children}</Text>;
};

export default Label;
