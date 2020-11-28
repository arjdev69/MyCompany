import React from 'react';

import {Box, Label, ImageLoad} from 'components';

import {ICON_LOGO} from 'utils/images';
import {styles, Title} from './styles';

const BoxLogo: React.FC = () => {
  return (
    <Box styles={styles.box}>
      <ImageLoad styles={styles.image} url={ICON_LOGO} urlLoad={{ICON_LOGO}} />
      <Title style={styles.label}>MyCompany</Title>
    </Box>
  );
};

export default BoxLogo;
