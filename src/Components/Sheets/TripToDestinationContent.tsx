import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {
  ChevronDown,
  Location,
  Plus,
  Star,
  TimeCircle,
  Wallet,
} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import theme from '../../Theme';
import Images from '../../Constants/Images';

interface Props {
  onSubmit: () => void;
}
const TripToDestinationContent = ({onSubmit}: Props) => {
  const {t} = useTranslation();

  return (
    <VStack p={3}>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight={800} fontSize={20}>
          {t('trip.title')}
        </Text>
        <Text fontSize={14}>{`3 ${t('trip.km')}`}</Text>
      </HStack>
      <Divider my={4} />
      <HStack space={3} alignItems="center" justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Avatar
            source={{
              uri: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
            }}
          />
          <VStack space={1}>
            <Heading fontWeight={700} fontSize={18}>
              Daniel Austin
            </Heading>
            <Text fontWeight={500} fontSize={14} color="#616161">
              Mercedes-Benz E-Class
            </Text>
          </VStack>
        </HStack>
        <VStack space={1} alignItems="flex-end">
          <HStack space={2} alignItems="center">
            <Star set="bold" color={theme.colors.primary[500]} />
            <Text fontWeight={500} fontSize={14} color="#616161">
              4.8
            </Text>
          </HStack>
          <Heading fontWeight={700} fontSize={14}>
            JYS 4728 JS
          </Heading>
        </VStack>
      </HStack>
      <Divider my={4} />

      <HStack space={3} alignItems="center">
        <View
          alignItems="center"
          justifyContent="center"
          p={3}
          bg="primary.200"
          borderRadius={200}>
          <View
            alignItems="center"
            justifyContent="center"
            p={2}
            bg="primary.500"
            borderRadius={200}>
            <Location set="bold" color={'black'} size={18} />
          </View>
        </View>
        <VStack>
          <Heading fontWeight={700} fontSize={18}>
            My Current Location
          </Heading>
          <Text fontWeight={500} fontSize={14}>
            35 Oak Ave. Antioch, TN 37013
          </Text>
        </VStack>
      </HStack>
      <HStack>
        <View alignItems="center" justifyContent="center" px={3}>
          <View alignItems="center" justifyContent="center" p={2}>
            <View style={styles.separator} />
          </View>
        </View>
      </HStack>
      <HStack space={3} alignItems="center">
        <View
          alignItems="center"
          justifyContent="center"
          p={3}
          bg="primary.200"
          borderRadius={200}>
          <View
            alignItems="center"
            justifyContent="center"
            p={2}
            bg="primary.500"
            borderRadius={200}>
            <Location set="bold" color={'black'} size={18} />
          </View>
        </View>
        <VStack>
          <Heading fontWeight={700} fontSize={18}>
            Soft Bank Buildings
          </Heading>
          <Text fontWeight={500} fontSize={14}>
            26 State St. Daphne, AL 36526
          </Text>
        </VStack>
      </HStack>
      <Divider my={4} />
      <Pressable mt={2}>
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
      <View my={4} backgroundColor={'white'} p={3} borderRadius={10}>
        <HStack alignItems="center">
          <Pressable>
            <HStack
              space={2}
              flex={1}
              alignItems="center"
              justifyContent="center">
              <Plus color={theme.colors.primary[400]} set="curved" />
              <Text fontWeight={600}>Add Stop</Text>
            </HStack>
          </Pressable>
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
      <Button onPress={onSubmit}>
        <Text>Tell Mood...(temp)</Text>
      </Button>
    </VStack>
  );
};
const styles = StyleSheet.create({
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
export default TripToDestinationContent;
