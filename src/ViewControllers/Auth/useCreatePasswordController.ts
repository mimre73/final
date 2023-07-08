import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';

import {useToast} from 'native-base';
import * as yup from 'yup';
import 'yup-phone';
import {useState} from 'react';
import {
  VERIFICATION_CODE,
  VERIFICATION_PHONE,
} from '../../Constants/AsyncStorageKeys';
import {asyncRetrieveData} from '../../Utils/StorageUtils';
import {signup} from '../../Api/auth';

const useCreatePasswordController = () => {
  const navigation = useNavigation();
  const toast = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  // validation
  const Schema = yup.object().shape({
    password: yup.string().required('Password is required'),
    verifyPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match'),
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      verifyPassword: '',
    },
    validationSchema: Schema,
    onSubmit: async values => {
      const phone = await asyncRetrieveData(VERIFICATION_PHONE);
      const code = await asyncRetrieveData(VERIFICATION_CODE);
      if (phone && code) {
        const response = await signup({
          password: values.password,
          username: phone,
          verificationCode: code,
        });
        console.log('response', response);
        setModalOpen(true);
      } else {
        toast.show({description: 'something went wrong...'});
      }
    },
  });

  // onPress
  const onContinuePress = () => {
    formik.handleSubmit();
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  return {
    onContinuePress,
    onBackPress,
    formik,
    modalOpen,
    setModalOpen,
  };
};

export default useCreatePasswordController;
