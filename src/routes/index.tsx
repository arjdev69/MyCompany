import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {signOut} from 'store/modules/auth/actions';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {LoginView, CompanysView, DetailCompanyView} from 'views';

import {COLORS, HP} from 'styles';
import {styles} from './styles';
import {ButtonCustom} from 'components';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state: any) => state.Auth);

  const press = (nav: string[]) => {
    dispatch(signOut());
    nav.push('Login');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth.signed ? 'ListCompanys' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: 0,
            },
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="ListCompanys"
          component={CompanysView}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: COLORS.primary,
              height: HP('15%'),
            },
            headerLeft: () => <></>,
            headerRight: () => (
              <ButtonCustom
                loading={false}
                style={styles.button}
                activeOpacity={0.6}
                onPress={() => {
                  press(navigation);
                }}>
                <Icon name="location-exit" size={25} color="#FFF" />
              </ButtonCustom>
            ),
          })}
        />

        <Stack.Screen
          name="DetailCompany"
          component={DetailCompanyView}
          options={({navigation}) => ({
            title: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
