import React from 'react';
import {Text, HStack, Heading, VStack, View, Image} from 'native-base';
import {StyleSheet} from 'react-native';
import theme from '../../../Theme';

interface DataType {
  title: string;
  description: string;
  image: any;
}
interface Props {
  data: DataType;
}

const NotificationItem = ({data}: Props) => {
  return (
    <HStack
      bg="white"
      space={4}
      p={5}
      mb={3}
      mx={3}
      borderRadius={20}
      alignItems="center">
      <View style={styles.badge}>
        <Image
          resizeMode="contain"
          alt="notif-item"
          source={data.image}
          width={25}
          height={25}
        />
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
  );
};
const styles = StyleSheet.create({
  badge: {
    width: 68,
    height: 68,
    borderRadius: 68,
    alignItems: 'center',
    backgroundColor: theme.colors.primary[500],
    justifyContent: 'center',
  },
});
export default NotificationItem;
