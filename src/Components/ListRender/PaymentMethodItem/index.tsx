import React from 'react';
import {HStack, Image, Pressable, Text} from 'native-base';

interface PaymentsDataType {
  title: string;
  image: any;
  connected: boolean;
}
interface Props {
  data: PaymentsDataType;
  onItemPress: () => void;
}

const PaymentMethodItem = ({data, onItemPress}: Props) => {
  return (
    <Pressable m={2} onPress={onItemPress} bg="white" borderRadius={10}>
      <HStack p={5} justifyContent="space-between">
        <HStack alignItems="center" space={3}>
          <Image
            alt="payment"
            width={7}
            resizeMode="contain"
            height={7}
            source={data.image}
          />
          <Text fontWeight={700} fontSize={18}>
            {data.title}
          </Text>
        </HStack>
        <Text
          fontWeight={700}
          color={data.connected ? 'primary.500' : 'error.500'}
          fontSize={16}>
          {data.connected ? 'Connected' : 'Disconnected'}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default PaymentMethodItem;
