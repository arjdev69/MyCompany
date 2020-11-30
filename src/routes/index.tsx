import * as React from 'react';

import {useDispatch} from 'react-redux';
import {signOut} from 'store/modules/auth/actions';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {LoginView, CompanysView} from 'views';

import {COLORS, HP} from 'styles';
import {styles} from './styles';
import {ButtonCustom, Label} from 'components';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const press = (nav: string[]) => {
    dispatch(signOut());
    nav.push('ListTasks');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListTasks">
        <Stack.Screen
          name="ListTasks"
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
              height: HP('15%')
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
