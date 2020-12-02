import React, {useEffect, useLayoutEffect} from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getListCompanys, getDetailCompany} from 'store/modules/Company/actions';

import Icon from 'react-native-vector-icons/Ionicons';

import {URL} from 'utils/Constants';

import {Companys} from 'templates';
import {Loading} from 'components';

import {COLORS} from 'styles';
import {styles} from './styles';
import * as stylesLogin from '../Login/styles';
export interface Props {
  navigation: any;
}

const CompanysView: React.FC<Props> = _props => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: any) => state.Auth);
  const companysData = useSelector((state: any) => state.Company);

  useLayoutEffect(() => {
    if (user) {
      _props.navigation.setOptions({
        headerTitle: () => (
          <UI.View style={styles.header}>
            <Icon name="logo-apple" size={48} color={COLORS.lightColor} />
            <UI.Text style={styles.headerText}>
              {user.investor.investor_name}
            </UI.Text>
          </UI.View>
        ),
      });
    }
  }, [_props.navigation]);

  const COLUMNS = {
    key: 'id',
    title: 'enterprise_name',
    image: {
      name: 'photo',
      value: URL.server,
    },
    tag: 'city',
  };

  const detailCompany = (_company: any) => {
    dispatch(getDetailCompany(_company.id));
    _props.navigation.navigate('DetailCompany');
  };

  const fetchApi = (filter: {}) => {
    dispatch(getListCompanys(filter));
  };

  useEffect(() => {
    fetchApi({});
  }, []);

  return (
    <UI.View>
      {companysData.loading && (
        <Loading
          size={'large'}
          color={COLORS.nextColor}
          styles={stylesLogin.styles.loading}
        />
      )}
      <Companys
        data={companysData.companys}
        columns={COLUMNS}
        onPress={detailCompany}
        fetch={fetchApi}
      />
    </UI.View>
  );
};

export default CompanysView;
