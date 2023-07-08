import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const useAccountReadyModalController = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeNavigator');
    }, 2000);
  }, [navigation]);

  return {};
};

export default useAccountReadyModalController;
