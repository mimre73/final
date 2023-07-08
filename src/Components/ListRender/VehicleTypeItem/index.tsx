import React, {SetStateAction, Dispatch} from 'react';
import {HStack, Image, Pressable, Text, VStack, View} from 'native-base';
import {StyleSheet} from 'react-native';
import theme from '../../../Theme';
import RadioSelectedSvg from '../../IconComponents/RadioSelected';
import RadioUnSelected from '../../IconComponents/RadioUnSelected';

interface DataType {
  id: number;
  title: string;
  desc: string;
  price: number;
  image: any;
}
interface Props {
  data: DataType;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}

const VehicleTypeItem = ({data, selected, setSelected}: Props) => {
  return (
    <Pressable
      backgroundColor="white"
      onPress={() => setSelected(data.id)}
      borderRadius={15}
      mt={3}>
      <HStack p={3} justifyContent="space-between">
        <HStack backgroundColor={'red'} alignItems="center" space={2}>
          <View style={styles.badge}>
            <Image source={data.image} alt="vehicleType" />
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
        <HStack alignItems="center" space={2}>
          <Text fontWeight={600} fontSize={14}>
            {`$${data.price.toFixed(2)}*`}
          </Text>
          {data.id === selected ? <RadioSelectedSvg /> : <RadioUnSelected />}
        </HStack>
      </HStack>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  badge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary[500],
  },
});
export default VehicleTypeItem;
