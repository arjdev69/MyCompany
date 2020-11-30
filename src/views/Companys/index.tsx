import React, { useEffect } from 'react';
import * as UI from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getListCompanys} from 'store/modules/Company/actions'
import {signOut} from 'store/modules/auth/actions';

import { Label } from 'components';

export interface Props {
  navigation: any;
}

const Companys: React.FC<Props> = _props => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.Auth);

  const press = () => {
    dispatch(signOut());
    _props.navigation.push('ListTasks');
  };

  useEffect(() =>{
    dispatch(getListCompanys(auth));
  }, [])

  return(
    <>
    <Label>ADADADADADA</Label>
    <UI.SafeAreaView>
        <UI.Button
          onPress={press}
          title="EXIT"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </UI.SafeAreaView>
    </>
  );
}

export default Companys;
