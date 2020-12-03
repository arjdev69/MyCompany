import React from 'react';

import {useDispatch} from 'react-redux';

import {setVisibleModal} from 'store/modules/Modal/actions';

import {ICON_NONE} from 'utils/images';

import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import {ButtonCustom, Box, ModalComp, ItemClick} from 'components';

export interface Props {
  items: {}[];
  itemsColumns: {label: string; selectedID: string};
  press: any;
}

const Options: React.FC<Props> = _props => {
  const dispatch = useDispatch();

  const setModalVisible = (params: Boolean) => {
    dispatch(setVisibleModal({['options']: params}));
  };

  return (
    <Box styles={{}}>
      <ModalComp
        name={'options'}
        icon={ICON_NONE}
        stylesModal={{}}
        stylesIcon={{}}
        animationType="fade"
        transparent={true}
        label={''}
        viewBtn={false}>
        <ItemClick
          key={'_idx'}
          styles={{}}
          stylesBtn={{}}
          stylesLabel={{}}
          label={'X'}
          children={false}
          fnCallback={() => {
            _props.press(null);
            setModalVisible(false);
          }}
        />
        <ScrollView>
          {_props.items.map(
            (_item: any, _idx: string | number | null | undefined) => (
              <ItemClick
                key={_idx}
                styles={{}}
                stylesBtn={{}}
                stylesLabel={{}}
                label={_item[_props.itemsColumns.label]}
                children={false}
                fnCallback={() => {
                  _props.press(_item[_props.itemsColumns.selectedID]);
                  setModalVisible(false);
                }}
              />
            ),
          )}
        </ScrollView>
      </ModalComp>
      <ButtonCustom
        style={{}}
        activeOpacity={0.6}
        loading={false}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Icon name="filter" size={30} color="#FFF" />
      </ButtonCustom>
    </Box>
  );
};

export default Options;
