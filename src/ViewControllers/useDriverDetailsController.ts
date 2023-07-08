import {useNavigation} from '@react-navigation/native';

const useDriverDetailsController = () => {
  const navigation = useNavigation();
  const onCallPress = () => {
    navigation.navigate('Calling');
  };
  const onChatPress = () => {
    navigation.navigate('Chat');
  };
  return {onCallPress, onChatPress};
};

export default useDriverDetailsController;
