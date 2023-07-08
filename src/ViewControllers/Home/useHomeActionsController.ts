import {useNavigation} from '@react-navigation/native';

const useHomeActionsController = () => {
  const navigation = useNavigation();
  const onSettingsPress = () => {
    navigation.navigate('SettingsNavigator');
  };
  const onInboxPress = () => {
    navigation.navigate('Inbox');
  };
  const onOffersPress = () => {
    navigation.navigate('Offers');
  };
  const onNotifsPress = () => {
    navigation.navigate('Notifications');
  };
  return {onSettingsPress, onInboxPress, onOffersPress, onNotifsPress};
};

export default useHomeActionsController;
