import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';

const useSettingsController = () => {
  const logoutSheetRef = useRef<BottomSheet>(null);
  const deleteSheetRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();
  const onLogoutPress = () => {
    logoutSheetRef.current?.snapToIndex(0);
  };
  const onDeletePress = () => {
    deleteSheetRef.current?.snapToIndex(0);
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  const onNavigate = (
    route:
      | 'Bookings'
      | 'Address'
      | 'NotificationSettings'
      | 'PaymentMethod'
      | 'TransactionHistory'
      | 'Security'
      | 'Privacy'
      | 'HelpCenter'
      | 'InviteFriends'
      | 'Languages',
  ) => {
    navigation.navigate(route);
  };

  return {
    onLogoutPress,
    onDeletePress,
    onBackPress,
    logoutSheetRef,
    deleteSheetRef,
    onNavigate,
  };
};

export default useSettingsController;
