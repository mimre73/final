import {HStack, Heading, IconButton, VStack} from 'native-base';
import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import MyBottomSheet from '../../../../Components/MyBottomSheet';
import AddressDetailsContent from '../../../../Components/Sheets/AddressDetailsContent';
import BottomSheet from '@gorhom/bottom-sheet';

function AddressDetails(): JSX.Element {
  const {t} = useTranslation();
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center" space={1} p={5}>
            <IconButton
              icon={<ArrowLeft set="light" color="black" />}
              borderRadius="full"
            />
            <Heading fontWeight={700} fontSize={24}>
              {t('addressDetails.addTitle')}
            </Heading>
          </HStack>
          <IconButton
            icon={<MoreCircle set="light" color="black" />}
            borderRadius="full"
          />
        </HStack>
        <MyBottomSheet
          ref={sheetRef}
          pressBehavior="close"
          dynamicHeight
          snapIndex={0}>
          <AddressDetailsContent />
        </MyBottomSheet>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AddressDetails;
