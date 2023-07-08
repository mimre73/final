import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Main/HomeScreen';
import SearchResultScreen from '../Screens/Main/SearchResultScreen';
import InboxScreen from '../Screens/Main/Inbox';
import ChatScreen from '../Screens/Main/ChatScreen';
import NotificationsScreen from '../Screens/Main/NotificationsScreen';
import SpecialOfferScreen from '../Screens/Main/SpecialOfferScreen';
import SettingNavigator from './SettingsNavigator';
import AddressLocationScreen from '../Screens/Main/CarRequest/AddressLocationScreen';
import SelectVehicleTypeScreen from '../Screens/Main/CarRequest/SelectVehicleTypeScreen';
import AvailableRidesScreen from '../Screens/Main/CarRequest/AvailableRidesScreen';
import AddPromoScreen from '../Screens/Main/CarRequest/AddPromoScreen';
import SelectPaymentMethodScreen from '../Screens/Main/CarRequest/SelectPaymentMethodScreen';
import DriverSearchScreen from '../Screens/Main/CarRequest/DriverSearchScreen';
import DriverArrivingScreen from '../Screens/Main/CarRequest/DriverArrivingScreen';
import DriverDetailsScreen from '../Screens/Main/CarRequest/DriverDetailsScreen';
import CallingScreen from '../Screens/Main/CarRequest/CallingScreen';
import CancelTaxiScreen from '../Screens/Main/CarRequest/CancelTaxiScreen';

function HomeNavigator(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SearchResult">
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'SettingsNavigator'} component={SettingNavigator} />
      <Stack.Screen name={'Offers'} component={SpecialOfferScreen} />
      <Stack.Screen name={'Notifications'} component={NotificationsScreen} />
      <Stack.Screen name={'Chat'} component={ChatScreen} />
      <Stack.Screen name={'Inbox'} component={InboxScreen} />
      <Stack.Screen name={'SearchResult'} component={SearchResultScreen} />
      {/* request */}
      <Stack.Screen
        name={'AddressLocation'}
        component={AddressLocationScreen}
      />
      <Stack.Screen
        name={'SelectVehicleType'}
        component={SelectVehicleTypeScreen}
      />
      <Stack.Screen name={'AvailableRides'} component={AvailableRidesScreen} />
      <Stack.Screen name={'AddPromo'} component={AddPromoScreen} />
      <Stack.Screen
        name={'SelectPaymentMethod'}
        component={SelectPaymentMethodScreen}
      />
      <Stack.Screen name={'DriverSearch'} component={DriverSearchScreen} />
      <Stack.Screen name={'DriverArriving'} component={DriverArrivingScreen} />
      <Stack.Screen name={'DriverDetails'} component={DriverDetailsScreen} />
      <Stack.Screen name={'Calling'} component={CallingScreen} />
      <Stack.Screen name={'CancelTaxi'} component={CancelTaxiScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
