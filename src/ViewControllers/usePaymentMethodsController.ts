import {useNavigation} from '@react-navigation/native';

const usePaymentMethodsController = () => {
  const navigation = useNavigation();
  const onNewCardAddPress = () => {
    navigation.navigate('AddCard');
  };
  const onItemPress = () => {
    console.log('click');
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  return {
    onNewCardAddPress,
    onItemPress,
    onBackPress,
  };
};

export default usePaymentMethodsController;
