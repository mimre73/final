import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const useForgotPasswordController = () => {
  const navigation = useNavigation();
  const [method, setMethod] = useState(1);

  // onPress
  const onForgotPress = () => {
    navigation.navigate('ForgotVerifyPhone', {type: method, value: '55555555'});
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  return {
    method,
    onForgotPress,
    setMethod,
    onBackPress,
  };
};

export default useForgotPasswordController;
