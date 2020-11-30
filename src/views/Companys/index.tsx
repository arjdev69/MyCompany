import React, {useEffect} from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getListCompanys} from 'store/modules/Company/actions';

import {Label} from 'components';
export interface Props {
  navigation: any;
}

const Companys: React.FC<Props> = _props => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.Auth);

  useEffect(() => {
    dispatch(getListCompanys(auth));
  }, []);

  return (
    <UI.SafeAreaView>
      <Label>ADADADADADA</Label>
    </UI.SafeAreaView>
  );
};

export default Companys;
