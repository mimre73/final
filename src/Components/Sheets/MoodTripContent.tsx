import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Center,
  Divider,
  FlatList,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {Star} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import theme from '../../Theme';
import {Image} from 'react-native';
import {Emojies} from '../../Dummy/Emojies';

interface Props {
  onSubmit: () => void;
}
const MoodTripContent = ({onSubmit}: Props) => {
  const {t} = useTranslation();
  const [selected, setSelected] = useState(-1);
  return (
    <VStack p={3}>
      <HStack alignItems="center" justifyContent="center">
        <Text fontWeight={800} fontSize={20}>
          {t('mood.title')}
        </Text>
      </HStack>
      <Divider my={4} />
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
      <Divider my={4} />

      <Center>
        <Heading fontSize={24} fontWeight={700}>
          {t('mood.whats')}
        </Heading>
        <Text fontSize={16} mt={2} fontWeight={500}>
          {t('mood.about')}
        </Text>
      </Center>
      <FlatList
        data={Emojies}
        numColumns={3}
        renderItem={({item, index}) => {
          return (
            <Pressable
              key={item}
              flex={1}
              onPress={() => setSelected(index)}
              borderRadius={10}
              borderColor={
                selected === index ? theme.colors.primary[500] : 'transparent'
              }>
              <Image
                source={require('../../Assets/Images/emoji-sad.png')}
                alt={item}
                style={{width: 100, height: 100}}
              />
            </Pressable>
          );
        }}
        keyExtractor={item => item}
        ListFooterComponent={
          <VStack>
            <Divider my={4} />
            <HStack space={3} flex={1} alignItems="center">
              <Button onPress={onSubmit} flex={1} bg="primary.100">
                <Text fontSize={18} fontWeight={700}>
                  {t('common.cancel')}
                </Text>
              </Button>
              <Button onPress={onSubmit} flex={1} bg="primary.500">
                <Text fontSize={18} fontWeight={700}>
                  {t('common.submit')}
                </Text>
              </Button>
            </HStack>
          </VStack>
        }
      />
    </VStack>
  );
};
export default MoodTripContent;
