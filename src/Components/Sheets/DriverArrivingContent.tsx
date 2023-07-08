import React from 'react';
import {
  Avatar,
  Button,
  CloseIcon,
  Divider,
  HStack,
  Heading,
  IconButton,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {Call, Chat, Star} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import theme from '../../Theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  onSubmit: () => void;
  navigation: NativeStackNavigationProp<any, any>;
}
const DriverArrivingContent = ({onSubmit, navigation}: Props) => {
  const {t} = useTranslation();
  return (
    <VStack p={3}>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight={800} fontSize={20}>
          {t('driverArriving.title')}
        </Text>
        <Text fontSize={14}>{`3 ${t('driverArriving.minutes')}`}</Text>
      </HStack>
      <Divider my={4} />
      <Pressable onPress={() => navigation.navigate('DriverDetails')}>
        <HStack space={3} alignItems="center" justifyContent="space-between">
          <HStack space={2} alignItems="center">
            <Avatar
              source={{
                uri: 'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
              }}
            />
            <VStack space={1}>
              <Heading fontWeight={700} fontSize={18}>
                Daniel Austin
              </Heading>
              <Text fontWeight={500} fontSize={14} color="#616161">
                Mercedes-Benz E-Class
              </Text>
            </VStack>
          </HStack>
          <VStack space={1} alignItems="flex-end">
            <HStack space={2} alignItems="center">
              <Star set="bold" color={theme.colors.primary[500]} />
              <Text fontWeight={500} fontSize={14} color="#616161">
                4.8
              </Text>
            </HStack>
            <Heading fontWeight={700} fontSize={14}>
              JYS 4728 JS
            </Heading>
          </VStack>
        </HStack>
      </Pressable>
      <HStack space={2} my={4} alignItems="center" justifyContent="center">
        <IconButton
          bg="primary.200"
          size="lg"
          onPress={() => navigation.navigate('CancelTaxi')}
          icon={<CloseIcon size={5} color="#000" />}
          borderRadius="full"
        />
        <IconButton
          bg="primary.500"
          size="lg"
          onPress={() => navigation.navigate('Chat')}
          icon={<Chat color="#000" set="bold" />}
          borderRadius="full"
        />
        <IconButton
          bg="primary.500"
          size="lg"
          onPress={() => navigation.navigate('Calling')}
          icon={<Call color="#000" set="bold" />}
          borderRadius="full"
        />
      </HStack>
      <Button onPress={onSubmit}>
        <Text>Driver Arrived...(temp)</Text>
      </Button>
    </VStack>
  );
};
export default DriverArrivingContent;
