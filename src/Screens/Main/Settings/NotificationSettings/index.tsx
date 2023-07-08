import {
  HStack,
  Heading,
  IconButton,
  ScrollView,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ArrowLeft, MoreCircle} from 'react-native-iconly';
import {useTranslation} from 'react-i18next';

function NotificationSettingsScreen(): JSX.Element {
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
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
              {t('notificationSettings.title')}
            </Heading>
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.general')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.sound')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.vibrate')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.special')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.promo')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.payments')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.cashback')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.updates')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.service')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
          <HStack p={3} justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} fontSize={18}>
              {t('notificationSettings.tips')}
            </Text>
            <Switch size="lg" onChange={() => console.log('changed!')} />
          </HStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default NotificationSettingsScreen;
