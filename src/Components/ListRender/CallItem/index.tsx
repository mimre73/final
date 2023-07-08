import React from 'react';
import {Avatar, Text, HStack, Heading, VStack, IconButton} from 'native-base';
import {
  ArrowDownSquare,
  ArrowUpSquare,
  Call,
  CloseSquare,
} from 'react-native-iconly';
import theme from '../../../Theme';

interface DataType {
  name: string;
  id: number;
  avatar: string;
  type: string;
  date: string;
}
interface Props {
  data: DataType;
}

const CallItem = ({data}: Props) => {
  return (
    <HStack p={5} alignItems="center" justifyContent="space-between">
      <HStack space={4} alignItems="center">
        <Avatar source={{uri: data.avatar}} />
        <VStack space={2}>
          <Heading fontSize={18} fontWeight={700}>
            {data.name}
          </Heading>
          <HStack space={2}>
            {data.type === 'incoming' ? (
              <ArrowDownSquare set="bold" color={theme.colors.info[500]} />
            ) : data.type === 'missed' ? (
              <ArrowUpSquare set="bold" color={theme.colors.error[500]} />
            ) : (
              <CloseSquare set="bold" color={theme.colors.success[500]} />
            )}

            <Text fontSize={14} fontWeight={500}>{`${
              data.type.charAt(0).toUpperCase() + data.type.slice(1)
            } | ${data.date}`}</Text>
          </HStack>
        </VStack>
      </HStack>
      <IconButton
        icon={<Call set="light" color={theme.colors.primary[500]} />}
        borderRadius="full"
      />
    </HStack>
  );
};

export default CallItem;
