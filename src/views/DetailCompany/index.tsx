import React, {useLayoutEffect} from 'react';
import * as UI from 'react-native';

import {useSelector} from 'react-redux';

import {URL} from 'utils/Constants';

import {Loading, NotFound, Header} from 'components';

import {COLORS} from 'styles';

import * as stylesLogin from '../Login/styles';
import {styles} from './styles';
export interface Props {
  navigation: any;
}

const DetailCompany: React.FC<Props> = _props => {
  const {
    company: {enterprise},
    loading,
  } = useSelector((state: any) => state.Company);

  useLayoutEffect(() => {
    if (enterprise) {
      _props.navigation.setOptions({
        header: () => (
          <Header
            navigation={_props.navigation}
            url={{uri: URL.server + enterprise.photo}}
            styles={{}}
            title={enterprise.enterprise_name}
            titleStyles={styles.headerTitle}
          />
        ),
      });
    }
  }, [_props.navigation, enterprise]);

  return (
    <UI.View>
      {loading && (
        <Loading
          size={'large'}
          color={COLORS.nextColor}
          styles={stylesLogin.styles.loading}
        />
      )}
      {enterprise ? (
        <UI.Text>{enterprise.city}</UI.Text>
      ) : (
        <NotFound message="Nenhum resultado encontrado..." />
      )}
    </UI.View>
  );
};

export default DetailCompany;
