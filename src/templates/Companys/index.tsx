import React from 'react';
import * as UI from 'react-native';
import {ListCompanys, Background} from 'components';

export interface Props {
  data: any;
  columns: {
    image: {
      name: string;
      value: string;
    };
    title: string;
    tag: string;
  };
  onPress: any;
}

const Companys: React.FC<Props> = _props => {
  return (
    <UI.View style={{height: '100%', width: '100%'}}>
      <Background>
        <ListCompanys
          data={_props.data}
          columns={_props.columns}
          onPress={_props.onPress}
        />
      </Background>
    </UI.View>
  );
};

export default Companys;
