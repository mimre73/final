import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useState} from 'react';
import {useToast} from 'native-base';

import * as yup from 'yup';
import 'yup-phone';
import {sendVerificationCode} from '../../Api/auth';

const useSignUpController = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const [code, setCode] = useState('+1');
  const [loading, setLoading] = useState(false);

  // validation
  const Schema = yup.object().shape({
    phoneNumber: yup.string().required('Phone number is required!'),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: Schema,
    onSubmit: async values => {
      setLoading(true);
      const response = await sendVerificationCode(code + values.phoneNumber);
      toast.show({description: response.message + ' ' + response.code});
      setLoading(false);
      navigation.navigate('Verify', {phone: code + values.phoneNumber});
    },
  });

  // onPress
  const onSignInPress = () => {
    navigation.navigate('Login');
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  const onSignupPress = () => {
    formik.handleSubmit();
  };
  return {
    onSignInPress,
    onSignupPress,
    onBackPress,
    formik,
    code,
    setCode,
    loading,
  };
};

export default useSignUpController;
