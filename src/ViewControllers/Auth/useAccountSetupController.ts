import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import {useState} from 'react';
import * as yup from 'yup';
import 'yup-phone';

const useAccountSetupController = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('+1');

  // validation
  const Schema = yup.object().shape({
    firstName: yup.string().required('First name is required!'),
    lastName: yup.string().required('Last name is required!'),
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      birthDate: '',
      email: '',
    },
    validationSchema: Schema,
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
      navigation.navigate('HomeNavigator');
    },
  });

  // onPress
  const onContinuePress = () => {
    formik.handleSubmit();
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  const onReverifyPress = () => {
    console.log('reverify');
  };
  return {
    onContinuePress,
    onReverifyPress,
    onBackPress,
    formik,
    code,
    setCode,
  };
};

export default useAccountSetupController;
