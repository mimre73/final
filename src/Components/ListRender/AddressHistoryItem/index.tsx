import React from 'react';
import {HStack, Pressable, Text, VStack} from 'native-base';
import {TimeCircle} from 'react-native-iconly';
import {SearchedResults} from '../../../DataTypes/MapTypes';

interface Props {
  data: SearchedResults;
  onItemPress: () => void;
}

const AddressHistoryItem = ({data, onItemPress}: Props) => {
  return (
    <Pressable onPress={onItemPress}>
      <HStack p={2} justifyContent="space-between">
        <HStack alignItems="center" space={2}>
          <TimeCircle set="light" color="#888" />
          <VStack direction="column">
            <Text fontWeight={700} fontSize={18}>
              {data.title}
            </Text>
            <Text color="#616161" fontWeight={500} fontSize={14}>
              {data.description}
            </Text>
          </VStack>
        </HStack>
        {/* <Text fontWeight={600} fontSize={14}>
          {`${0} km`}
        </Text> */}
      </HStack>
    </Pressable>
  );
};

export default AddressHistoryItem;
