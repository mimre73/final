import {
  AddIcon,
  Button,
  FlatList,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  Pressable,
  Radio,
  Text,
  VStack,
  View,
} from 'native-base';
import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {
  ChevronDown,
  Filter,
  Location,
  MoreCircle,
  TimeCircle,
  Wallet,
} from 'react-native-iconly';
import theme from '../../../Theme';
import MyBottomSheet from '../../../Components/MyBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import VehicleMoreOptionsContent from '../../../Components/Sheets/VehicleMoreOptionsContent';
import LogoSvg from '../../../Components/IconComponents/Logo';
import RidesItem from '../../../Components/ListRender/RidesItem';
import RidesDummyData from '../../../Dummy/Rides';
import Images from '../../../Constants/Images';

function AvailableRidesScreen(): JSX.Element {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(0);
  const moreOptionsSheet = useRef<BottomSheet>(null);

  return (
    <SafeAreaView style={styles.container}>
      <VStack p={2} flex={1}>
        <HStack py={3} alignItems="center" space={2}>
          <IconButton icon={<LogoSvg />} borderRadius="full" />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} fontWeight={700} fontSize={24}>
            {t('availableRides.title')}
          </Heading>
        </HStack>

        <FlatList
          data={RidesDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <RidesItem
              data={item}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          ListHeaderComponent={
            <View p={3} borderRadius={10} bgColor={'white'}>
              <HStack alignItems="center" space={2}>
                <Filter set="bold" color={theme.colors.primary[500]} />
                <Text fontWeight={600} fontSize={16}>
                  {t('availableRides.sort')}
                </Text>
                <HStack flex={1} alignItems="center" justifyContent="center">
                  <Radio.Group
                    name="exampleGroup"
                    defaultValue="price"
                    accessibilityLabel="pick a size">
                    <HStack space={4}>
                      <Radio value="price" size="sm">
                        <Text fontWeight={600} fontSize={14}>
                          {t('availableRides.price')}
                        </Text>
                      </Radio>
                      <Radio value="time" size="sm">
                        <Text fontWeight={600} fontSize={14}>
                          {t('availableRides.time')}
                        </Text>
                      </Radio>
                    </HStack>
                  </Radio.Group>
                </HStack>
              </HStack>
            </View>
          }
          ListFooterComponent={
            <VStack p={4}>
              <Text p={1} fontWeight={700} fontSize={18}>
                {t('availableRides.promo')}
              </Text>
              <HStack alignItems="center" space={2} flex={1} mt={2}>
                <Input
                  flex={1}
                  placeholder={t('availableRides.promoPlaceholder') || ''}
                  size="md"
                />
                <IconButton
                  bg={'#FEBB1B14'}
                  onPress={() => console.log('navigation.navigate(AddPromo)')}
                  icon={<AddIcon color="#9E9E9E" set="bold" />}
                  borderRadius="full"
                />
              </HStack>
              <Pressable
                mt={2}
                onPress={() =>
                  console.log('navigation.navigate(SelectPaymentMethod)')
                }>
                <View p={3} borderRadius={10} bgColor={'white'}>
                  <HStack alignItems="center" justifyContent="space-between">
                    <HStack alignItems="center">
                      <Image
                        source={Images.payments.master}
                        alt="payment"
                        width={10}
                        resizeMode="contain"
                        height={10}
                      />
                      <Text fontWeight={700} fontSize={18}>
                        •••• •••• •••• •••• 4679
                      </Text>
                    </HStack>
                    <ChevronDown color={theme.colors.primary[500]} />
                  </HStack>
                </View>
              </Pressable>
            </VStack>
          }
        />
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
          mt={3}
          onPress={() => console.log('navigation.navigate(DriverSearch)')}>
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
    backgroundColor: '#f8f8f8',
  },
});
export default AvailableRidesScreen;
