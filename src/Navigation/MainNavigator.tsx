import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

function MainNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeNavigator">
      <Stack.Screen name={'Splash'} component={SplashScreen} />
      <Stack.Screen name={'HomeNavigator'} component={HomeNavigator} />
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'Auth'} component={AuthNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
