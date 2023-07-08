import {HStack, Heading, IconButton, Input, VStack, View} from 'native-base';
import React from 'react';
import {
  Bubble,
  ComposerProps,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  Send as SendContainer,
  SendProps,
} from 'react-native-gifted-chat';
import {ArrowLeft, Call, Image2, MoreCircle, Send} from 'react-native-iconly';
import theme from '../../Theme';
import useChatController from '../../ViewControllers/useChatController';

function ChatScreen() {
  //   const onSend = useCallback((msg = []) => {
  //     setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
  //   }, []);
  const {messages, setMessages} = useChatController();
  const renderSend = (props: SendProps<IMessage>) => (
    <SendContainer {...props}>
      <View
        bg="primary.500"
        width={25}
        height={25}
        borderRadius={25}
        p={6}
        my={4}
        alignItems={'center'}
        justifyContent={'center'}>
        <Send color="black" set="bold" />
      </View>
    </SendContainer>
  );
  function renderInputToolbar(props: InputToolbarProps<IMessage>) {
    const inputToolbarProps = {
      ...props,
      containerStyle: {
        borderTopColor: 'transparent',
        borderTopWidth: 0,
        backgroundColor: 'white',
        paddingHorizontal: 10,
      },
    };
    return <InputToolbar {...inputToolbarProps} />;
  }
  return (
    <VStack flex={1} bg="white">
      <HStack p={4} alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <MoreCircle set="curved" color="black" />
          <Heading ml={4} fontWeight={700} fontSize={24}>
            Harry Peterson
          </Heading>
        </HStack>
        <HStack alignItems="center">
          <IconButton
            icon={<Call set="light" color="black" />}
            borderRadius="full"
          />
          <IconButton
            icon={<MoreCircle set="light" color="black" />}
            borderRadius="full"
          />
        </HStack>
      </HStack>
      <GiftedChat
        messages={messages}
        showUserAvatar={false}
        renderBubble={(props: Bubble<IMessage>['props']) => (
          <Bubble
            wrapperStyle={{
              left: {
                backgroundColor: '#F5F5F5',
              },
              right: {
                backgroundColor: theme.colors.primary[500],
              },
            }}
            textStyle={{
              left: {
                color: 'black',
                fontFamily: 'Urbanist-Medium',
              },
              right: {
                color: 'black',
                fontFamily: 'Urbanist-Medium',
              },
            }}
            {...props}
          />
        )}
        alwaysShowSend
        timeTextStyle={{
          left: {
            color: '#757575',
            fontFamily: 'Urbanist-Medium',
            width: '100%',
            alignSelf: 'flex-start',
            textAlign: 'right',
            marginLeft: 'auto',
          },
          right: {
            color: '#757575',
            fontFamily: 'Urbanist-Medium',
          },
        }}
        inverted={false}
        renderInputToolbar={renderInputToolbar}
        renderComposer={(props: ComposerProps) => {
          return (
            <HStack py={4} flex={1} mx={1}>
              <Input
                InputRightElement={
                  <IconButton
                    icon={<Image2 color="#9E9E9E" set="light" />}
                    borderRadius="full"
                  />
                }
                onChangeText={props.onTextChanged}
                placeholder="Message..."
              />
            </HStack>
          );
        }}
        renderSend={renderSend}
        renderAvatar={() => null}
        showAvatarForEveryMessage={false}
        onSend={msg => setMessages(prev => prev.concat(msg))}
        user={{
          _id: 1,
        }}
      />
    </VStack>
  );
}
export default ChatScreen;
