import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const useWelcomeController = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, [navigation]);

  const getStartedOnPress = () => {
    navigation.navigate('Auth');
  };
  return {
    getStartedOnPress,
  };
};

export default useWelcomeController;
