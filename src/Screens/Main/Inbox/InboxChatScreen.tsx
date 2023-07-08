import {FlatList, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ChatsDummyData from '../../../Dummy/Chats';
import ChatItem from '../../../Components/ListRender/ChatItem';
import useInboxChatController from '../../../ViewControllers/useInboxChatController';

function InboxChatScreen(): JSX.Element {
  const {onChatNavigate} = useInboxChatController();
  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <FlatList
          data={ChatsDummyData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ChatItem data={item} onItemPress={onChatNavigate} />
          )}
        />
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default InboxChatScreen;
