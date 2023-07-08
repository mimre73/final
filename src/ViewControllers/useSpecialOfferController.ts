import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';

const useSpecialOfferController = () => {
  const detailsRef = useRef<BottomSheet>(null);
  const navigation = useNavigation();
  const onDetailsPress = () => {
    detailsRef.current?.snapToIndex(2);
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  return {
    detailsRef,
    onDetailsPress,
    onBackPress,
  };
};

export default useSpecialOfferController;
