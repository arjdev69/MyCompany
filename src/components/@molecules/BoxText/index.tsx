import React from 'react';

import {Box, Label} from 'components';

import {styles} from './styles';

export interface Props {
  stylesBox: {};
  stylesLabels: {};
  description: string;
}

const BoxText: React.FC<Props> = _props => {
  return (
    <Box styles={[styles.box, _props.stylesBox]}>
      <Label
        icon={false}
        viewStyle={{}}
        style={[styles.label, _props.stylesLabels]}>
        {_props.description}
      </Label>
    </Box>
  );
};

export default BoxText;
