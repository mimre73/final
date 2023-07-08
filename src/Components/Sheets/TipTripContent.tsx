import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from 'native-base';
import {Star} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';
import theme from '../../Theme';

interface Props {
  onSubmit: () => void;
}
const TipTripContent = ({}: Props) => {
  const {t} = useTranslation();
  const [tip, setTip] = useState(1);

  return (
    <VStack p={3}>
      <HStack alignItems="center" justifyContent="center">
        <Text fontWeight={800} fontSize={20}>
          {t('rate.title')}
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
          {t('tip.whats')}
        </Heading>
        <Text fontSize={16} my={2} fontWeight={500}>
          {t('tip.about')}
        </Text>
        <HStack space={3} mt={3} alignItems="center">
          <Button
            onPress={() => setTip(0)}
            variant={tip === 0 ? 'solid' : 'outline'}
            borderColor={theme.colors.primary[500]}>
            <Text fontWeight={700} fontSize={24}>
              $2
            </Text>
          </Button>
          <Button
            onPress={() => setTip(1)}
            variant={tip === 1 ? 'solid' : 'outline'}
            borderColor={theme.colors.primary[500]}>
            <Text fontWeight={700} fontSize={24}>
              $4
            </Text>
          </Button>
          <Button
            onPress={() => setTip(2)}
            variant={tip === 2 ? 'solid' : 'outline'}
            borderColor={theme.colors.primary[500]}>
            <Text fontWeight={700} fontSize={24}>
              $6
            </Text>
          </Button>
          <Button
            onPress={() => setTip(3)}
            variant={tip === 3 ? 'solid' : 'outline'}
            borderColor={theme.colors.primary[500]}>
            <Text fontWeight={700} fontSize={24}>
              $8
            </Text>
          </Button>
        </HStack>
      </Center>

      <Divider my={4} />
      <HStack space={3} flex={1} alignItems="center">
        <Button flex={1} bg="primary.100">
          <Text fontSize={18} fontWeight={700}>
            {t('tip.no')}
          </Text>
        </Button>
        <Button flex={1} bg="primary.500">
          <Text fontSize={18} fontWeight={700}>
            {t('tip.pay')}
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
};
export default TipTripContent;
