import React from 'react';
import {
  Avatar,
  Text,
  HStack,
  Heading,
  VStack,
  View,
  Pressable,
} from 'native-base';
import {StyleSheet} from 'react-native';

interface DataType {
  name: string;
  id: number;
  avatar: string;
  msg: string;
  time: string;
  unread: number;
}
interface Props {
  data: DataType;
  onItemPress: () => void;
}

const ChatItem = ({data, onItemPress}: Props) => {
  return (
    <Pressable onPress={onItemPress}>
      <HStack p={5} alignItems="center" justifyContent="space-between">
        <HStack space={4} alignItems="center">
          <Avatar source={{uri: data.avatar}} />
          <VStack space={2}>
            <Heading fontSize={18} fontWeight={700}>
              {data.name}
            </Heading>
            <Text>{data.msg}</Text>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end" space={2}>
          <View
            bg={data.unread !== 0 ? 'primary.500' : 'transparent'}
            style={styles.badge}>
            <Text color={data.unread !== 0 ? 'black' : 'transparent'}>
              {data.unread}
            </Text>
          </View>
          <Text>{data.time}</Text>
        </VStack>
      </HStack>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  badge: {
    width: 25,
    height: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ChatItem;
