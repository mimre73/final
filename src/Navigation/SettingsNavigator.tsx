import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../Screens/Main/Settings/SettingsScreen';
import BookingScreen from '../Screens/Main/Settings/Booking';
import SecurityScreen from '../Screens/Main/Settings/Security';
import NotificationSettingsScreen from '../Screens/Main/Settings/NotificationSettings';
import PaymentMethodScreen from '../Screens/Main/Settings/PaymentMethod';
import AddNewCardScreen from '../Screens/Main/Settings/PaymentMethod/AddNewCardScreen';
import LanguagesScreen from '../Screens/Main/Settings/Languages';
import PrivacyScreen from '../Screens/Main/Settings/Privacy';
import SavedAddressesScreen from '../Screens/Main/Settings/SavedAddresses';
import AddressDetails from '../Screens/Main/Settings/AddressDetails';
import HelpCenterScreen from '../Screens/Main/Settings/HelpCenter';
import EditProfileScreen from '../Screens/Main/Settings/EditProfile';
import InviteFriendsScreen from '../Screens/Main/Settings/InviteFriends';
import TransactionHistoryScreen from '../Screens/Main/Settings/TransactionHistory';
import TransactionDetailsScreen from '../Screens/Main/Settings/TransactionHistory/TransactionDetailsScreen';

function SettingNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Settings">
      <Stack.Screen name={'Settings'} component={SettingsScreen} />
      <Stack.Screen name={'Bookings'} component={BookingScreen} />
      <Stack.Screen name={'Security'} component={SecurityScreen} />
      <Stack.Screen
        name={'NotificationSettings'}
        component={NotificationSettingsScreen}
      />
      <Stack.Screen name={'PaymentMethod'} component={PaymentMethodScreen} />
      <Stack.Screen name={'AddCard'} component={AddNewCardScreen} />
      <Stack.Screen name={'Languages'} component={LanguagesScreen} />
      <Stack.Screen name={'Privacy'} component={PrivacyScreen} />
      <Stack.Screen name={'Address'} component={SavedAddressesScreen} />
      <Stack.Screen name={'AddressDetails'} component={AddressDetails} />
      <Stack.Screen name={'HelpCenter'} component={HelpCenterScreen} />
      <Stack.Screen name={'EditProfile'} component={EditProfileScreen} />
      <Stack.Screen name={'InviteFriends'} component={InviteFriendsScreen} />
      <Stack.Screen
        name={'TransactionHistory'}
        component={TransactionHistoryScreen}
      />
      <Stack.Screen
        name={'TransactionDetails'}
        component={TransactionDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default SettingNavigator;
