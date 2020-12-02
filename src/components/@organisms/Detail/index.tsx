import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';

import {Box, BoxText} from 'components';

import {styles} from './styles';

export interface Props {
  data: any;
  columns: {
    description: string;
  };
}

const Detail: React.FC<Props> = _props => {
  return (
    <Box styles={styles.box}>
      <ScrollView>
        <BoxText
          stylesBox={styles.viewDescription}
          stylesLabels={styles.label}
          description={_props.data[_props.columns.description]}
        />
      </ScrollView>
    </Box>
  );
};

export default Detail;
