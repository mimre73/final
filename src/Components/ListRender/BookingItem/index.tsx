import React, {useState} from 'react';
import {
  Avatar,
  Center,
  Divider,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
  View,
} from 'native-base';
import Collapsible from 'react-native-collapsible';
import {
  ChevronDown,
  ChevronUp,
  Location,
  TimeCircle,
  Wallet,
} from 'react-native-iconly';
import {StyleSheet} from 'react-native';

export interface BookingType {
  name: string;
  avatar: string;
  car: string;
  plaque: string;
  distance: number;
  time: number;
  value: number;
  date: string;
  path: {
    origin: {
      title: string;
      desc: string;
      latlng: Array<number>;
    };
    destination: {
      title: string;
      desc: string;
      latlng: Array<number>;
    };
  };
}
interface Props {
  data: BookingType;
  type: string;
}

const BookingItem = ({data, type}: Props) => {
  const [open, setOpen] = useState(true);
  return (
    <View p={5} bg="white" borderRadius={10} m={3}>
      <Pressable onPress={() => setOpen(!open)}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack space={4}>
            <Avatar source={{uri: data.avatar}} size={'lg'} />
            <VStack space={2}>
              <Heading fontWeight={700} fontSize={18}>
                {data.name}
              </Heading>
              <Text fontWeight={500} fontSize={14}>
                {data.car}
              </Text>
            </VStack>
          </HStack>
          <VStack space={2}>
            <View
              borderRadius={10}
              px={2}
              alignSelf={'flex-end'}
              py={1}
              bg={
                type === 'Active'
                  ? 'primary.500'
                  : type === 'Completed'
                  ? 'success.500'
                  : 'error.500'
              }>
              <Text fontWeight={600} fontSize={10} color="white">
                {type}
              </Text>
            </View>
            <Text fontWeight={600} fontSize={14}>
              {data.plaque}
            </Text>
          </VStack>
        </HStack>
        <Divider bg={'#eee'} my={3} />
      </Pressable>
      <Collapsible collapsed={open} align="center">
        <HStack flex={1}>
          <HStack flex={1} space={2}>
            <Location color="#757575" set="curved" />
            <Text>{`${data.distance} km`}</Text>
          </HStack>
          <HStack justifyContent="center" flex={1} space={2}>
            <TimeCircle color="#757575" set="curved" />
            <Text>{`${data.time} mins`}</Text>
          </HStack>
          <HStack justifyContent="flex-end" flex={1} space={2}>
            <Wallet color="#757575" set="curved" />
            <Text>{`${data.value.toFixed(2)}`}</Text>
          </HStack>
        </HStack>
        <HStack py={2} alignItems="center" justifyContent="space-between">
          <Text fontWeight={500} fontSize={14}>
            Date & Time
          </Text>
          <Text fontWeight={600} fontSize={16}>
            {data.date}
          </Text>
        </HStack>
        <Divider bg={'#eee'} my={3} />
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
              {data.path.origin.title}
            </Heading>
            <Text fontWeight={500} fontSize={14}>
              {data.path.destination.desc}
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
              {data.path.destination.title}
            </Heading>
            <Text fontWeight={500} fontSize={14}>
              {data.path.destination.desc}
            </Text>
          </VStack>
        </HStack>
      </Collapsible>
      <Center pt={3}>
        {open ? <ChevronDown color="black" /> : <ChevronUp color="black" />}
      </Center>
    </View>
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

export default BookingItem;
