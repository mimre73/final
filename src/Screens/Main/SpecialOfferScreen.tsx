import {FlatList, HStack, Heading, IconButton, VStack} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import OfferItem from '../../Components/ListRender/OffersItem';
import MyBottomSheet from '../../Components/MyBottomSheet';
import SpecialOffersContent from '../../Components/Sheets/SpecialOffersContent';
import OffersDummyData from '../../Dummy/Offers';
import useSpecialOfferController from '../../ViewControllers/useSpecialOfferController';

function SpecialOfferScreen() {
  const {t} = useTranslation();
  const {detailsRef, onBackPress, onDetailsPress} = useSpecialOfferController();
  return (
    <VStack flex={1}>
      <HStack p={4} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <IconButton
            onPress={onBackPress}
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} fontWeight={700} fontSize={24}>
            {t('offers.title')}
          </Heading>
        </HStack>

        <IconButton
          icon={<MoreCircle set="light" color="black" />}
          borderRadius="full"
        />
      </HStack>
      <FlatList
        data={OffersDummyData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <OfferItem data={item} onItemPress={onDetailsPress} />
        )}
      />
      <MyBottomSheet ref={detailsRef} snapIndex={-1} pressBehavior="close">
        <SpecialOffersContent />
      </MyBottomSheet>
    </VStack>
  );
}
export default SpecialOfferScreen;
