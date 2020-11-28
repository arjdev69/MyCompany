import * as React from 'react';
import * as UI from 'react-native';

import {useDispatch} from 'react-redux';

import {signOut} from 'store/modules/auth/actions';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/Ionicons';

import {LoginView} from 'views';

//import {COLORS, SIZES, HP} from 'styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const ListCompany = ({navigation}) => {
    const press = () => {
      dispatch(signOut());
      navigation.push('ListTasks');
    };

    return (
      <UI.SafeAreaView>
        <UI.Button
          onPress={press}
          title="EXIT"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </UI.SafeAreaView>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ListTasks">
        <Stack.Screen name="ListTasks" component={LoginView} />
        <Stack.Screen name="ListCompanys" component={ListCompany} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
