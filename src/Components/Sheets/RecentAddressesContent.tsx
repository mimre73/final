import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useFocusEffect} from '@react-navigation/native';
import {IconButton, Input} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Location} from 'react-native-iconly';
import RecentAddressesDummyData from '../../Dummy/RecentAddresses';
import AddressHistoryItem from '../ListRender/AddressHistoryItem';
import {useBetween} from 'use-between';
import {useReduxDispatch} from '../../Store';
import useHomeSheetsController from '../../ViewControllers/Home/useHomeSheetsController';
import {setDestination} from '../../Store/slices/booking';

const useSharedSheet = () => useBetween(useHomeSheetsController);

const RecentAddressesContent = () => {
  const {openTravelingToPickupSheet} = useSharedSheet();
  const dispatch = useReduxDispatch();
  return (
    <BottomSheetFlatList
      ListHeaderComponent={
        <Input
          mx={2}
          onPressIn={openTravelingToPickupSheet}
          placeholder="Where would you like to go?"
          rightElement={
            <IconButton
              icon={<Location set="bold" color="#aaa" />}
              borderRadius="full"
            />
          }
        />
      }
      data={RecentAddressesDummyData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <AddressHistoryItem
          data={item}
          onItemPress={() => {
            dispatch(
              setDestination({
                latitude: item.latitude,
                longitude: item.longitude,
                title: item.title,
              }),
            );
            openTravelingToPickupSheet();
          }}
        />
      )}
      refreshing={false}
      initialNumToRender={5}
      bounces={true}
      windowSize={10}
      maxToRenderPerBatch={5}
      style={styles.contentContainer}
      keyboardDismissMode="interactive"
      indicatorStyle="black"
      focusHook={useFocusEffect}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    overflow: 'visible',
  },
});
export default RecentAddressesContent;
