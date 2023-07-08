import {useNavigation, useRoute} from '@react-navigation/native';
import {useToast} from 'native-base';
import {useEffect, useState} from 'react';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import 'yup-phone';
import {
  VERIFICATION_CODE,
  VERIFICATION_PHONE,
} from '../../Constants/AsyncStorageKeys';
import {checkVerifyCode} from '../../Api/auth';
import {asyncStoreData} from '../../Utils/StorageUtils';
import {VerifyPhoneParams} from '../../DataTypes/NavigationTypes';
const CELL_COUNT = 6;

const useVerifyPhoneController = () => {
  const [value, setValue] = useState('');
  const {params} = useRoute();
  const pageParams = params as VerifyPhoneParams;
  const navigation = useNavigation();
  const toast = useToast();
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [timeLeft, setTimeLeft] = useState(60);
  useEffect(() => {
    // exit early when we reach 0
    // eslint-disable-next-line curly
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // onPress
  const onVerifyPress = async () => {
    const response = await checkVerifyCode(pageParams.phone, value);
    if (response.verified) {
      await asyncStoreData(VERIFICATION_CODE, value);
      await asyncStoreData(VERIFICATION_PHONE, pageParams.phone);
      navigation.navigate('CreatePassword');
      toast.show({description: 'Verified...'});
    } else {
      toast.show({description: 'Not verified! please check and try again'});
    }
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  return {
    onVerifyPress,
    onBackPress,
    value,
    setValue,
    ref,
    props,
    timeLeft,
    getCellOnLayoutHandler,
    CELL_COUNT,
    phone: pageParams.phone,
  };
};

export default useVerifyPhoneController;
