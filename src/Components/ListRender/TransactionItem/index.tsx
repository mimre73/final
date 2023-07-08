import React from 'react';
import {Avatar, HStack, Pressable, Text, VStack, View} from 'native-base';
import {ArrowDownSquare, ArrowUpSquare, Wallet} from 'react-native-iconly';
import theme from '../../../Theme';

interface TransactionType {
  id: number;
  name: string;
  date: string;
  avatar: string;
  type: number;
  amount: number;
}
interface Props {
  data: TransactionType;
  onPressItem: (id: number) => void;
}

const TransactionItem = ({data, onPressItem}: Props) => {
  return (
    <Pressable onPress={() => onPressItem(data.id)}>
      <HStack py={3} px={4} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center" space={2}>
          {data.type === 0 ? (
            <Avatar source={{uri: data.avatar}} size="md" />
          ) : (
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
                <Wallet set="bold" color={'black'} size={18} />
              </View>
            </View>
          )}

          <VStack space={2}>
            <Text fontWeight={700} fontSize={16}>
              {data.name}
            </Text>
            <Text color="#616161" fontWeight={500} fontSize={14}>
              {data.date}
            </Text>
          </VStack>
        </HStack>
        <VStack space={2} alignItems="flex-end">
          <Text fontWeight={700} fontSize={16}>
            {`$${data.amount}`}
          </Text>
          <HStack alignItems="center" space={2}>
            <Text color="#616161" fontWeight={500} fontSize={14}>
              {data.type === 0 ? 'Taxi Expense' : 'Top Up'}
            </Text>
            {data.type === 0 ? (
              <ArrowUpSquare
                set="bold"
                color={theme.colors.error[500]}
                size={14}
              />
            ) : (
              <ArrowDownSquare
                set="bold"
                color={theme.colors.info[500]}
                size={14}
              />
            )}
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default TransactionItem;
