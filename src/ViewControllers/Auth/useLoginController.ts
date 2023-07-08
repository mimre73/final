import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useState} from 'react';
import * as yup from 'yup';
import 'yup-phone';

const useLoginController = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('+1');

  // validation
  const Schema = yup.object().shape({
    phoneNumber: yup.string().phone().required('Phone number is required!'),
    password: yup
      .string()
      .min(6, 'Password is too short!')
      .required('Password is required!'),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: '',
      remember: true,
    },
    validationSchema: Schema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      // navigation.navigate('HomeNavigator');
    },
  });

  // onPress
  const onSignInPress = () => {
    formik.handleSubmit();
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  const onForgotPress = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignupPress = () => {
    navigation.navigate('Signup');
  };
  return {
    onSignInPress,
    onForgotPress,
    onSignupPress,
    onBackPress,
    formik,
    code,
    setCode,
  };
};

export default useLoginController;
