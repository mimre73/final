import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Authorization/LoginScreen';
import SignUpScreen from '../Screens/Authorization/SignUpScreen';
import VerifyPhoneScreen from '../Screens/Authorization/VerifyPhoneScreen';
import CreatePasswordScreen from '../Screens/Authorization/CreatePasswordScreen';
import FingerprintScreen from '../Screens/Authorization/FingerprintScreen';
import AccountSetupScreen from '../Screens/Authorization/AccountSetupScreen';
import ForgotPasswordScreen from '../Screens/Authorization/Forgot/ForgotPasswordScreen';
import ForgotChangePassword from '../Screens/Authorization/Forgot/ForgotChangePassword';
import ForgotVerifyPhone from '../Screens/Authorization/Forgot/ForgotVerifyPhone';

function AuthNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Signup'} component={SignUpScreen} />
      <Stack.Screen name={'Verify'} component={VerifyPhoneScreen} />
      <Stack.Screen name={'CreatePassword'} component={CreatePasswordScreen} />
      <Stack.Screen name={'Fingerprint'} component={FingerprintScreen} />
      <Stack.Screen name={'AccountSetup'} component={AccountSetupScreen} />
      <Stack.Screen name={'ForgotVerify'} component={ForgotPasswordScreen} />

      <Stack.Screen name={'ForgotPassword'} component={ForgotPasswordScreen} />
      <Stack.Screen
        name={'ForgotChangePassword'}
        component={ForgotChangePassword}
      />
      <Stack.Screen name={'ForgotVerifyPhone'} component={ForgotVerifyPhone} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
