import * as React from 'react';

import * as UI from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
//import Icon from 'react-native-vector-icons/Ionicons';

//import {Home, Products, Services} from 'views';

//import {COLORS, SIZES, HP} from 'styles';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const Home = () => {
    return (
      <UI.View>
        <UI.Text>HOME</UI.Text>
      </UI.View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListTasks">
        <Stack.Screen name="ListTasks" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
