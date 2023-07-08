import React, {Dispatch, SetStateAction} from 'react';
import {HStack, Image, Pressable, Text} from 'native-base';
import RadioSelectedSvg from '../../IconComponents/RadioSelected';
import RadioUnSelected from '../../IconComponents/RadioUnSelected';

interface PaymentsDataType {
  id: number;
  title: string;
  image: any;
  amount: number | null;
}
interface Props {
  data: PaymentsDataType;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const SelectPaymentMethodItem = ({data, selected, setSelected}: Props) => {
  return (
    <Pressable
      m={2}
      onPress={() => setSelected(data.id)}
      bg="white"
      borderRadius={10}>
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
        <HStack alignItems={'center'} space={2}>
          {data.amount !== null && (
            <Text fontWeight={700} fontSize={16}>{`$${data.amount}`}</Text>
          )}

          {data.id === selected ? <RadioSelectedSvg /> : <RadioUnSelected />}
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default SelectPaymentMethodItem;
