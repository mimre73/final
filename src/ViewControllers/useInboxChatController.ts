import {useNavigation} from '@react-navigation/native';

const useInboxChatController = () => {
  const navigation = useNavigation();
  const onChatNavigate = () => {
    navigation.navigate('Chat');
  };

  return {onChatNavigate};
};

export default useInboxChatController;
