import React from 'react';
import {HStack, IconButton, Text, VStack, View} from 'native-base';
import {Edit, Location} from 'react-native-iconly';
import theme from '../../../Theme';

interface AddressType {
  id: number;
  title: string;
  desc: string;
}
interface Props {
  data: AddressType;
  onItemPress: (id: number) => void;
}

const AddressItem = ({data, onItemPress}: Props) => {
  return (
    <HStack py={3} px={4} justifyContent="space-between">
      <HStack alignItems="center" space={2}>
        <View
          alignItems="center"
          justifyContent="center"
          p={2.5}
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
        <VStack direction="column">
          <Text fontWeight={700} fontSize={18}>
            {data.title}
          </Text>
          <Text color="#616161" fontWeight={500} fontSize={14}>
            {data.desc}
          </Text>
        </VStack>
      </HStack>
      <IconButton
        onPress={() => onItemPress(data.id)}
        icon={<Edit color={theme.colors.primary[500]} set="bold" />}
        borderRadius="full"
      />
    </HStack>
  );
};

export default AddressItem;
