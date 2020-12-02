import React from 'react';
import * as UI from 'react-native';

import {Background, DetailItem} from 'components';

// import { Container } from './styles';

export interface Props {
  data: any;
  columns: {
    description: string;
  };
}

const DetailCompany: React.FC<Props> = _props => {
  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <DetailItem data={_props.data} columns={_props.columns} />
      </Background>
    </UI.View>
  );
};

export default DetailCompany;
