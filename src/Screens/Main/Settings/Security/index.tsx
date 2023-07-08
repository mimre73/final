import {
  Button,
  HStack,
  Heading,
  IconButton,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';

function SecurityScreen(): JSX.Element {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <VStack flex={1} backgroundColor={'white'}>
        <HStack alignItems="center" space={1} p={5}>
          <IconButton
            icon={<ArrowLeft set="light" color="black" />}
            borderRadius="full"
          />
          <IconButton
            icon={<MoreCircle set="curved" color="black" />}
            borderRadius="full"
          />
          <Heading fontWeight={700} fontSize={24}>
            {t('security.title')}
          </Heading>
        </HStack>
        <HStack p={3} justifyContent="space-between" alignItems="center">
          <Text fontWeight={600} fontSize={18}>
            {t('security.remember')}
          </Text>
          <Switch size="lg" onChange={() => console.log('changed!')} />
        </HStack>
        <HStack p={3} justifyContent="space-between" alignItems="center">
          <Text fontWeight={600} fontSize={18}>
            {t('security.faceid')}
          </Text>
          <Switch size="lg" onChange={() => console.log('changed!')} />
        </HStack>
        <HStack p={3} justifyContent="space-between" alignItems="center">
          <Text fontWeight={600} fontSize={18}>
            {t('security.biometric')}
          </Text>
          <Switch size="lg" onChange={() => console.log('changed!')} />
        </HStack>
        <HStack p={3} justifyContent="space-between" alignItems="center">
          <Text fontWeight={600} fontSize={18}>
            {t('security.google')}
          </Text>
          <Switch size="lg" onChange={() => console.log('changed!')} />
        </HStack>
        <Button m={3} bg="primary.200">
          <Text fontWeight={700} fontSize={16}>
            {t('security.password')}
          </Text>
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SecurityScreen;
