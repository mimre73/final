import {
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Pressable,
  Text,
  VStack,
  View,
} from 'native-base';
import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  ArrowLeft,
  ChevronRight,
  Location,
  MoreCircle,
  TimeCircle,
  Wallet,
} from 'react-native-iconly';
import VehicleTypesDummyData from '../../../Dummy/VehicleTypes';
import VehicleTypeItem from '../../../Components/ListRender/VehicleTypeItem';
import theme from '../../../Theme';
import MyBottomSheet from '../../../Components/MyBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import VehicleMoreOptionsContent from '../../../Components/Sheets/VehicleMoreOptionsContent';

function SelectVehicleTypeScreen(): JSX.Element {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(0);
  const moreOptionsSheet = useRef<BottomSheet>(null);

  return (
    <SafeAreaView style={styles.container}>
      <VStack p={2} flex={1}>
        <HStack py={3} alignItems="center" space={2}>
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} fontWeight={700} fontSize={24}>
            {t('vehicleType.title')}
          </Heading>
        </HStack>
        <Center>
          <Divider m={2} />
        </Center>
        <Text>{t('vehicleType.desc')}</Text>
        <FlatList
          data={VehicleTypesDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <VehicleTypeItem
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          ListFooterComponent={
            <VStack>
              <Text p={1} color="#616161" textAlign="right">
                {t('vehicleType.hint')}
              </Text>
              <Center>
                <Divider m={2} />
              </Center>
            </VStack>
          }
        />
        <Pressable p={2} onPress={() => moreOptionsSheet.current?.collapse()}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight={700} fontSize={16}>
              {t('vehicleType.more')}
            </Text>
            <ChevronRight color={theme.colors.primary[500]} />
          </HStack>
        </Pressable>
        <View backgroundColor={'white'} p={3} borderRadius={10}>
          <HStack alignItems="center">
            <HStack
              space={2}
              flex={1}
              alignItems="center"
              justifyContent="center">
              <Location color="#757575" set="curved" />
              <Text fontWeight={600}>4.5 km</Text>
            </HStack>
            <HStack
              space={2}
              flex={1}
              alignItems="center"
              justifyContent="center">
              <TimeCircle color="#757575" set="light" />
              <Text fontWeight={600}>4 mins</Text>
            </HStack>
            <HStack
              space={2}
              flex={1}
              alignItems="center"
              justifyContent="center">
              <Wallet color="#757575" set="curved" />
              <Text fontWeight={600}>$20.00</Text>
            </HStack>
          </HStack>
        </View>
        <Button
          onPress={() => console.log('navigation.navigate(AvailableRides)')}
          mt={3}>
          <Text fontWeight={700} fontSize={16}>
            {t('common.continue')}
          </Text>
        </Button>
        <MyBottomSheet
          pressBehavior="close"
          snapIndex={-1}
          dynamicHeight
          ref={moreOptionsSheet}>
          <VehicleMoreOptionsContent sheetRef={moreOptionsSheet} />
        </MyBottomSheet>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
export default SelectVehicleTypeScreen;
