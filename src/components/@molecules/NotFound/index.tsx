import React from 'react';

import {Box, Label} from 'components';

import {styles} from './styles';

export interface Props {
  message: string;
}

const NotFound: React.FC<Props> = (_props) => {
  return (
    <Box styles={styles.boxNotFound}>
      <Label style={styles.labelNotFound}>{_props.message}</Label>
    </Box>
  );
};

export default NotFound;
