import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Box, Input, ButtonCustom} from 'components';

import {styles} from './styles';

export interface Props {
  fetch: any;
}

const SearchItem: React.FC<Props> = _props => {
  const [search, setSearch] = useState('');

  const makeCall = () => {
    _props.fetch(search);
  };

  const changedText = (value: React.SetStateAction<string>) => {
    setSearch(value);
    if (value === '') {
      _props.fetch('');
    }
  };

  return (
    <Box styles={styles.box}>
      <Input
        icon={false}
        colorIcon="#FFF"
        styleBox={styles.viewSearch}
        style={styles.label}
        placeholderTextColor={'#FFF'}
        placeholder="Digite o nome do empreendimento..."
        returnKeyType="send"
        value={search}
        onChangeText={(value: React.SetStateAction<string>) => {
          changedText(value);
        }}
        onSubmitEditing={makeCall}
      />
      <ButtonCustom
        style={{}}
        activeOpacity={0.6}
        loading={false}
        onPress={makeCall}>
        <Icon name="search" size={30} color="#FFF" />
      </ButtonCustom>
    </Box>
  );
};

export default SearchItem;
