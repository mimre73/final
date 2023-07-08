import React from 'react';
import {Text, HStack, Heading, VStack, View, Pressable} from 'native-base';
import {StyleSheet} from 'react-native';
import OfferSvg from '../../IconComponents/Offers';
import {TicketStar} from 'react-native-iconly';

interface DataType {
  title: string;
  description: string;
  color: {first: string; second: string};
}
interface Props {
  data: DataType;
  onItemPress: () => void;
}

const OfferItem = ({data, onItemPress}: Props) => {
  return (
    <Pressable onPress={onItemPress}>
      <HStack
        bg="white"
        space={4}
        p={5}
        mb={3}
        mx={5}
        borderRadius={20}
        alignItems="center">
        <View style={styles.badge}>
          <OfferSvg
            firstColor={data.color.first}
            secondColor={data.color.second}
          />
          <View style={styles.offerIcon}>
            <TicketStar set="bold" color="white" />
          </View>
        </View>
        <VStack space={2}>
          <Heading fontSize={18} fontWeight={700}>
            {data.title}
          </Heading>
          <Text fontSize={14} fontWeight={500}>
            {data.description}
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  badge: {
    width: 68,
    height: 68,
    position: 'relative',
    borderRadius: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerIcon: {
    position: 'absolute',
  },
});
export default OfferItem;
