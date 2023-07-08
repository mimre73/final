import {
  Button,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
  View,
} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Location} from 'react-native-iconly';
import useDistanceContentController from '../../ViewControllers/Home/Sheets/useDistanceContentController';

interface Props {
  loading: boolean;
  startAddress: string;
  endAddress: string;
}
const DistanceContent = (props: Props) => {
  const {onContinuePress, distance} = useDistanceContentController();
  return (
    <VStack p={3}>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight={800} fontSize={20}>
          Distance
        </Text>
        <Text fontSize={14}>
          {props.loading ? `${distance || 1000 / 1000} km` : 'Finding route...'}
        </Text>
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
            {props.startAddress}
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
            {props.endAddress}
          </Heading>
          <Text fontWeight={500} fontSize={14}>
            26 State St. Daphne, AL 36526
          </Text>
        </VStack>
      </HStack>
      <Button mt={4} onPress={onContinuePress}>
        <Text fontWeight={800} fontSize={16}>
          Continue to Order
        </Text>
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
export default DistanceContent;
