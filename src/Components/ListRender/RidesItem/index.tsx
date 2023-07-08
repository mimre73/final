import React, {SetStateAction, Dispatch} from 'react';
import {HStack, Pressable, Text, VStack, View} from 'native-base';
import {StyleSheet} from 'react-native';
import theme from '../../../Theme';
import {Star} from 'react-native-iconly';

interface DataType {
  id: number;
  title: string;
  desc: string;
  price: number;
  rate: number | null;
}
interface Props {
  data: DataType;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const RidesItem = ({data, selected, setSelected}: Props) => {
  return (
    <Pressable
      backgroundColor="white"
      onPress={() => setSelected(data.id)}
      borderRadius={15}
      mt={3}>
      <HStack p={3} justifyContent="space-between">
        <HStack backgroundColor={'red'} alignItems="center" space={2}>
          <View
            style={data.id !== selected ? styles.badge : styles.badgeSelected}
          />
          <VStack direction="column" space={1}>
            <HStack alignItems="center" space={2}>
              <Text fontWeight={700} fontSize={18}>
                {data.title}
              </Text>
              {data.rate !== null && (
                <HStack alignItems="center" space={2}>
                  <Star set="bold" color={theme.colors.primary[500]} />
                  <Text fontWeight={500} fontSize={14}>
                    {data.rate}
                  </Text>
                </HStack>
              )}
            </HStack>
            <Text color="#616161" fontWeight={500} fontSize={14}>
              {data.desc}
            </Text>
          </VStack>
        </HStack>
        <HStack alignItems="center" space={2}>
          <Text
            color={data.id === selected ? theme.colors.error[500] : '#212121'}
            fontWeight={700}
            fontSize={18}>
            {`$${data.price}`}
          </Text>
        </HStack>
      </HStack>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  badge: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: theme.colors.primary[100],
  },
  badgeSelected: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: theme.colors.primary[500],
  },
});
export default RidesItem;
