import React from 'react';
import * as UI from 'react-native';

import {useSelector} from 'react-redux';

import {Box, ButtonCustom, CardItem} from 'components';

export interface Props {
  data: any;
  columns: {
    title: string;
    tag: string;
    image: {
      name: string;
      value: string;
    };
  };
  onPress: any;
  fetch: any;
}

const ListCompanys: React.FC<Props> = _props => {
  const {image} = _props.columns;
  const {filter} = useSelector((state: any) => state.Company);

  return (
    <Box styles={{flex: 1}}>
      <UI.FlatList
        onEndReached={() => {
          _props.fetch({...filter});
        }}
        removeClippedSubviews={true}
        onEndReachedThreshold={0.1}
        data={_props.data}
        renderItem={({item}) => (
          <ButtonCustom
            key={item.id + 'btn'}
            onPress={() => {
              _props.onPress(item);
            }}
            style={{}}
            activeOpacity={0.6}
            loading={false}>
            <CardItem
              styles={{}}
              key={item.id}
              title={item[_props.columns.title]}
              tag={item[_props.columns.tag]}
              url={{uri: image.value + item[image.name]}}
              urlLoad={{uri: image.value + item[image.name]}}
              onPress={_props.onPress}
            />
          </ButtonCustom>
        )}
        keyExtractor={item => String(item.id)}
      />
    </Box>
  );
};

export default ListCompanys;
