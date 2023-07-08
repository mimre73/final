import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Center,
  Divider,
  HStack,
  Heading,
  IconButton,
  Input,
  Pressable,
  VStack,
  View,
  theme,
} from 'native-base';
import {Bookmark, ChevronRight, Location} from 'react-native-iconly';
import RecentAddressesDummyData from '../../Dummy/RecentAddresses';
import {useFocusEffect} from '@react-navigation/native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import useSelectAddressContentController from '../../ViewControllers/Home/Sheets/useSelectAddressContentController';
import AddressHistoryItem from '../ListRender/AddressHistoryItem';

const SelectAddressContent = () => {
  const {
    onItemPress,
    onSearchResultPress,
    onCurrentLocationPress,
    origin,
    destination,
  } = useSelectAddressContentController();

  return (
    <BottomSheetFlatList
      ListHeaderComponent={
        <VStack p={4}>
          <Heading textAlign="center">Select Address</Heading>
          <Center my={4} mx={2}>
            <Divider bg={'#eee'} />
          </Center>
          <HStack mr={3} alignItems="center">
            <Location set="bold" color={theme.colors.primary[500]} />
            <Input
              mx={2}
              value={origin?.title}
              placeholder="From"
              rightElement={
                <IconButton
                  icon={<Location set="bold" color="#aaa" />}
                  onPress={onCurrentLocationPress}
                  borderRadius="full"
                />
              }
            />
          </HStack>
          <View style={styles.separator} />
          <HStack mr={3} alignItems="center">
            <Location set="bold" color={theme.colors.primary[500]} />
            <Input
              mx={2}
              value={destination?.title}
              placeholder="Destination"
              rightElement={
                <IconButton
                  icon={<Location set="bold" color="#aaa" />}
                  onPress={onSearchResultPress}
                  borderRadius="full"
                />
              }
            />
          </HStack>
          <Center my={4} mx={2}>
            <Divider bg={'#eee'} />
          </Center>
          <Pressable mr={3}>
            <HStack alignItems="center" justifyContent="space-between">
              <HStack space={2} alignItems="center">
                <Bookmark set="bold" color={theme.colors.primary[500]} />
                <Heading flex={1} fontSize={18} fontWeight={700}>
                  Saved Places
                </Heading>
              </HStack>
              <ChevronRight color={theme.colors.primary[500]} />
            </HStack>
          </Pressable>
          <Center my={4} mx={2}>
            <Divider bg={'#eee'} />
          </Center>
        </VStack>
      }
      data={RecentAddressesDummyData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <AddressHistoryItem data={item} onItemPress={onItemPress} />
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
  separator: {
    width: 24,
    height: 0,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#9E9E9E',
    marginVertical: 10,
    transform: [{rotate: '90deg'}],
  },
});
export default SelectAddressContent;
