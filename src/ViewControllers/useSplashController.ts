import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const useSplashController = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, [navigation]);

  return {};
};

export default useSplashController;
