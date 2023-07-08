import {
  Avatar,
  Center,
  CloseIcon,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {ArrowLeft, MoreCircle, Video, VolumeUp} from 'react-native-iconly';
import Images from '../../../Constants/Images';
import theme from '../../../Theme';

function CallingScreen() {
  const {t} = useTranslation();

  return (
    <VStack flex={1}>
      <HStack alignItems="center" p={4}>
        <IconButton
          icon={<ArrowLeft set="light" color="black" />}
          borderRadius="full"
        />
        <MoreCircle set="curved" color="black" />
      </HStack>
      <VStack mt={10} flex={1}>
        <VStack position="relative">
          <Center>
            <Image
              alt="call-container"
              resizeMode="contain"
              width="350px"
              height="350px"
              source={Images.calling.container}
            />
            <Avatar
              source={{
                uri: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
              }}
              borderWidth={20}
              borderColor={theme.colors.primary[500]}
              position="absolute"
              width="200px"
              height="200px"
            />
          </Center>
        </VStack>
        <Center mt={4}>
          <Heading fontSize={32}>Daniel Austin</Heading>
          <Text mt={3} fontWeight={18} color="#424242">{`01:25 ${t(
            'calling.minutes',
          )}`}</Text>
        </Center>
      </VStack>

      <HStack space={2} my={4} alignItems="center" justifyContent="center">
        <IconButton
          bg="primary.200"
          p={4}
          icon={<CloseIcon size={5} color="#000" />}
          borderRadius="full"
        />
        <IconButton
          bg="primary.500"
          p={4}
          icon={<Video color="#000" set="bold" />}
          borderRadius="full"
        />
        <IconButton
          bg="primary.500"
          p={4}
          icon={<VolumeUp color="#000" set="bold" />}
          borderRadius="full"
        />
      </HStack>
    </VStack>
  );
}
export default CallingScreen;
