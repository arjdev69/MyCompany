import * as React from 'react';

import * as UI from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/Ionicons';

import {LoginView} from 'views';

//import {COLORS, SIZES, HP} from 'styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ListTasks">
        <Stack.Screen name="ListTasks" component={LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
