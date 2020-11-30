import React, {useEffect, useLayoutEffect} from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getListCompanys} from 'store/modules/Company/actions';

import Icon from 'react-native-vector-icons/Ionicons';

import {Label} from 'components';
import {COLORS} from 'styles';
import {styles} from './styles';
import {Companys} from 'templates';
export interface Props {
  navigation: any;
}

const CompanysView: React.FC<Props> = _props => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.Auth);

  const user = auth.user;

  useEffect(() => {
    dispatch(getListCompanys(auth));
  }, []);

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

  return (
    <UI.SafeAreaView>
      <Companys />
    </UI.SafeAreaView>
  );
};

export default CompanysView;
