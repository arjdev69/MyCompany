import React from 'react';
import * as UI from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Loading} from 'components';
import {COLORS} from 'styles';
import * as stylesLogin from '../Login/styles';

const DetailCompany: React.FC = () => {
  const {
    company: {enterprise},
    loading,
  } = useSelector((state: any) => state.Company);

  return (
    <UI.View>
      {loading && (
        <Loading
          size={'large'}
          color={COLORS.nextColor}
          styles={stylesLogin.styles.loading}
        />
      )}
      <UI.Text>{enterprise.city}</UI.Text>
    </UI.View>
  );
};

export default DetailCompany;
