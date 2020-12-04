import React, {useEffect} from 'react';
import * as UI from 'react-native';

import {useSelector} from 'react-redux';

import {URL} from 'utils/Constants';
import * as Helpers from 'utils';

import {DetailCompany} from 'templates';

import {Loading, NotFound, Header, Label} from 'components';

import {COLORS} from 'styles';

import * as stylesLogin from '../Login/styles';
import {styles} from './styles';
export interface Props {
  navigation: any;
}

const DetailCompanyView: React.FC<Props> = _props => {
  const {
    company: {enterprise},
    loading,
  } = useSelector((state: any) => state.Company);

  useEffect(() => {
    if (enterprise) {
      _props.navigation.setOptions({
        header: () => (
          <Header
            navigation={_props.navigation}
            url={{uri: URL.server + enterprise.photo}}
            styles={{}}
            title={enterprise.enterprise_name}
            titleStyles={styles.headerTitle}>
            <UI.View style={styles.boxLabels}>
              <Label
                icon="attach-money"
                style={styles.text}
                viewStyle={styles.viewLabel}>
                {Helpers.convertMoney(enterprise.share_price)}
              </Label>
              <Label
                icon="location-searching"
                style={styles.text}
                viewStyle={styles.viewLabel}>
                {enterprise.country}
              </Label>
              <Label
                icon="location-city"
                style={styles.text}
                viewStyle={styles.viewLabel}>
                {enterprise.city}
              </Label>
            </UI.View>
          </Header>
        ),
      });
    }
  }, [_props.navigation, enterprise]);

  const COLUMNS = {
    description: 'description',
  };

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
        <DetailCompany data={enterprise} columns={COLUMNS} />
      ) : (
        <NotFound message="Nenhum resultado encontrado..." />
      )}
    </UI.View>
  );
};

export default DetailCompanyView;
